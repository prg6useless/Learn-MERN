const userModel = require("./user.model");
const { generateHash, compareHash } = require("../../utils/hash");
const { signToken, generateOTP } = require("../../utils/token");

const event = require("events");
const { EventEmitter } = require("stream");
const { sendMail } = require("../../services/email");
const { hashSync } = require("bcryptjs");

const myEvent = new event.EventEmitter();

myEvent.addListener("sendMail", (email) => {
  sendMail({
    email,
    subject: "Signing up successful in Movie Mate",
    html: "<b>Thank you for signing up to Movie Mate</b>",
  });
});

myEvent.addListener("emailVerification", (email, token) => {
  sendMail({
    email,
    subject: "MovieMate Email Verification",
    html: `<p>This is your OTP for verifying your email : </p>${token}`,
  });
});

const create = async (payload) => {
  const { email, password } = payload;
  payload.password = generateHash(password);
  myEvent.emit("sendMail", email);
  return await userModel.create(payload);
};

const login = async (payload) => {
  const { email, password } = payload;
  const user = await userModel
    .findOne({ email, isActive: true })
    .select("+password"); // return password too, since model is defined to not return password
  if (!user) throw new Error("User not found");
  const isVerified = user?.isEmailVerified;
  if (!isVerified) throw new Error("Email is not verified");
  const checkPassword = compareHash(user?.password, password);
  if (!checkPassword) throw new Error("Email or Password is incorrect");
  const tokenPaylaod = {
    name: user?.name,
    email: user?.email,
  };
  const Token = signToken(tokenPaylaod);
  if (!Token) throw new Error("Something went wrong");
  return Token;
};

const generateToken = async (payload) => {
  const { email } = payload;
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("User not found");
  const isVerified = user?.isEmailVerified;
  if (!isVerified) {
    const token = generateOTP();
    const updatedUser = await userModel.updateOne(
      { _id: user?.id },
      { otp: token }
    );
    if (!updatedUser) throw new Error("Something went wrong");
    myEvent.emit("emailVerification", email, token);
  }
  return true;
};

const verifyEmail = async (payload) => {
  const { email, otp } = payload;
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("User not found");
  const validOTP = user?.otp === otp;
  if (!validOTP) throw new Error("Invalid OTP");
  const updatedUser = await userModel.updateOne(
    { _id: user?.id },
    { isEmailVerified: true, otp: "" }
  );
  if (!updatedUser) throw new Error("Something went wrong");
  return validOTP;
};

const list = async ({ page = 1, limit = 2, role, search }) => {
  // advanced operations -> pagination, sort, filter, search
  const query = [];

  // search
  if (search?.name) {
    query.push({
      $match: {
        name: new RegExp(search?.name, "gi"),
      },
    });
  }
  if (search?.email) {
    query.push({
      $match: {
        email: new RegExp(search?.email, "gi"),
      },
    });
  }

  // sort
  query.push({
    $sort: {
      createdAt: 1,
    },
  });

  // filter based on role assignment, TODO accept array remaining
  if (role) {
    query.push({
      $match: {
        roles: filter,
      },
    });
  }

  // pagination
  query.push(
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (+page - 1) * +limit, // +limit ->Number(limit)
          },
          {
            $limit: +limit,
          },
        ],
      },
    },
    {
      $addFields: {
        total: {
          $arrayElemAt: ["$metadata.total", 0],
        },
      },
    },
    {
      $project: {
        metadata: 0,
        "data.password": 0,
      },
    }
  );

  const result = await userModel.aggregate(query);

  return {
    total: result[0]?.total || 0,
    users: result[0]?.data,
    page: +page, //+page = Number(page)
    limit: +limit, //+limit = Number(limit)
  };
};

const blockUser = async (payload) => {
  const user = await userModel.findOne({ _id: payload });
  if (!user) throw new Error("User not found");
  const statusPayload = {
    isActive: !user?.isActive,
  };
  const updatedUser = await userModel.updateOne(
    { _id: payload },
    statusPayload
  );
  if (!updatedUser) throw new Error("Something went wrong");
  return true;
};

const removeById = (id) => {
  return userModel.deleteOne({ _id: id });
};

const getProfile = (_id) => {
  return userModel.findOne({ _id });
};

const updateById = async (id, payload) => {
  return userModel.findOneAndUpdate({ _id: id }, payload, { new: true }); // {new : true} immediately return updated data
};

const getById = async (id) => {
  return userModel.findOne({ _id: id }); //_id-> of database
};

const changePassword = async (id, payload) => {
  const { oldPassword, newPassword } = payload;
  // does user in concern exist?
  const user = await userModel
    .findOne({
      _id: id,
      isActive: true,
      isEmailVerified: true,
    })
    .select("+password");
  if (!user) throw new Error("User Not Found");
  // oldpassword with database
  const isValidPassword = compareHash(user?.password, oldPassword);
  if (!isValidPassword)
    throw new Error("Old Password does not match with current user password");
  // convert newPassword to hash and save to database
  return userModel.updateOne(
    { _id: id },
    { password: generateHash(newPassword) }
  );
};

const resetPassword = async (id, newPassword) => {
  // does user in concern exist?
  const user = await userModel.findOne({
    _id: id,
    isActive: true,
    isEmailVerified: true,
  });
  if (!user) throw new Error("User Not Found");
  // convert newPassword to hash and save to database
  return userModel.updateOne(
    { _id: id },
    { password: generateHash(newPassword) }
  );
};

const forgetPasswordTokenGeneration = async (payload) => {
  const { email } = payload;
  const user = await userModel.findOne({
    email,
    isActive: true,
    isEmailVerified: true,
  });
  if (!user) throw new Error("User Not Found");
  const OTPToken = generateOTP();
  const updatedUser = await userModel.updateOne({ email }, { otp: OTPToken });
  if (!updatedUser) throw new Error("Soemthing went wrong");
  myEvent.emit("emailVerification", email, OTPToken);
  return true;
};

const forgetPasswordChangePass = async (payload) => {
  // does user in concern exist?
  const { email, otp, newPassword } = payload;
  const user = await userModel.findOne({
    email,
    isActive: true,
    isEmailVerified: true,
  });
  if (!user) throw new Error("User Not Found");
  // convert newPassword to hash and save to database
  if (otp !== user?.otp) throw new Error("Otp mismatch");
  const hashPassword = generateHash(newPassword);
  const updatedUser = await userModel.updateOne(
    { email },
    { password: hashPassword, otp: "" }
  );
  if (!updatedUser) throw new Error("Soemthing went wrong");
  return true;
};

module.exports = {
  create,
  login,
  generateToken,
  verifyEmail,
  blockUser,
  getById,
  list,
  getProfile,
  updateById,
  removeById,
  changePassword,
  resetPassword,
  forgetPasswordTokenGeneration,
  forgetPasswordChangePass,
};
