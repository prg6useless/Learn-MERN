const userModel = require("./user.model");
const { generateHash, compareHash } = require("../../utils/hash");
const { signToken, verifyToken, generateOTP } = require("../../utils/token");

const event = require("events");
const { EventEmitter } = require("stream");
const { sendMail } = require("../../services/email");

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
  return userModel.create(payload);
};

const login = async (payload) => {
  const { email, password } = payload;
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("User not found");
  const isVerified = user?.isEmailVerified;
  if (!isVerified) throw new Error("Email is not verified");
  const checkPassword = compareHash(user?.password, password);
  if (!checkPassword) throw new Error("Email or Password is incorrect");
  const tokenPaylaod = {
    name: user?.name,
    roles: user?.roles,
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

const getById = (id) => {
  return userModel.findOne({ _id: id }); //_id-> of database
};

const list = () => {
  return userModel.find();
};

const updateById = (id, payload) => {
  return userModel.updateOne({ _id: id }, payload);
};

const removeById = (id) => {
  return userModel.deleteOne({ _id: id });
};

module.exports = {
  create,
  login,
  generateToken,
  verifyEmail,
  getById,
  list,
  updateById,
  removeById,
};
