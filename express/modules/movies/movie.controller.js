// CRUD operations
const movieModel = require("./movie.model");

// movie create {create}
// movie list {list}
// get one movie {getById}
// update releaseDate {updateReleaseDate}
// update movieDetails {update}
// delete movie {remove} // check whether movie's ticket has been sold
// update seats {updateSeats}

const create = async (payload) => {
  return await movieModel.create(payload);
};

const list = async () => {
  return await movieModel.findOne();
};

const getById = async (_id) => {
  return await movieModel.findOne({ _id });
};

const update = async (_id) => {
  return await movieModel.updateOne({ _id });
};

const updateReleaseDate = async (_id, payload) => {
  return await movieModel.updateOne({ _id }, { releaseDate: payload });
};

const updateSeats = async (_id, payload) => {
  return await movieModel.updateOne({ _id }, { seats: payload });
  s;
};

const remove = async (_id) => {
  return await movieModel.deleteOne({ _id });
};

module.exports = {
  create,
  list,
  getById,
  update,
  updateReleaseDate,
  updateSeats,
  remove,
};
