const orderModel = require("./order.model");

const create = async (payload) => {
  return await orderModel.create(payload);
};

const getById = async (id) => {
  const result = await orderModel.aggregate();
  return result[0];
};

const updateById = (id, paylaod) => {};

const list = ({ page, limit, search }) => {};

const changeStatus = (id, payload) => {};

module.exports = { create, getById, updateById, list, changeStatus };
