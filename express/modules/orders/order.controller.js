const orderModel = require("./order.model");
const { v4: uuidv4 } = require("uuid");

const create = async (payload) => {
  payload.id = uuidv4();
  return await orderModel.create(payload);
};

const getById = async (id) => {
  const result = await orderModel.aggregate([
    {
      $match: {
        id,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "buyer",
        foreignField: "_id",
        as: "buyer",
      },
    },
    {
      $unwind: {
        path: "$buyer",
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        "buyer.password": false,
        "buyer.roles": false,
        "buyer.isActive": false,
        "buyer.isEmailVerified": false,
        "buyer.createdAt": false,
        "buyer.updatedAt": false,
      },
    },
    {
      $lookup: {
        from: "movies",
        localField: "products.movie",
        foreignField: "_id",
        as: "products",
      },
    },
    {
      $project: {
        "products.slug": false,
        "products.createdAt": false,
        "products.updatedAt": false,
        "products.endDate": false,
      },
    },
  ]);
  return result;
};

const updateById = (id, paylaod) => {};

const list = ({ page, limit, search }) => {};

const changeStatus = (id, payload) => {};

module.exports = { create, getById, updateById, list, changeStatus };
