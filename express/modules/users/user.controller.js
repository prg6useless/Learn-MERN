const userModel = require("./user.model");

const create = (payload) => {
  return userModel.create(payload);
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

module.exports = { create, getById, list, updateById, removeById };
