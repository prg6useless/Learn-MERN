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
  // create slug from title eg : The Invincibles slug->the-invincibles {use slugify package in /utils}
  const slug = "";
  // check if slug exists in database
  const movie = await movieModel.findOne({ slug });
  if (movie) throw new Error("Movie title already exists");
  // create movie
  payload.slug = slug;
  return await movieModel.create(payload);
};

const list = async () => {
  return await movieModel.find();
};

const getById = async (_id) => {
  return await movieModel.findOne({ _id });
};

const update = async (_id, payload) => {
  return await movieModel.findOneAndUpdate({ _id }, payload, { new: true });
};

const updateReleaseDate = async (_id, payload) => {
  // check if releaseDate is older than today {use moment, luxon, date-fns}
  return await movieModel.findOneAndUpdate({ _id }, payload, { new: true });
};

const updateSeats = async (_id, payload) => {
  // check if the movie seats are less than defined number(process.env.MIN_SEATS)
  return await movieModel.findOneAndUpdate({ _id }, payload, { new: true });
};

const remove = async (_id) => {
  // movie's ticket must not have been sold
  // the movie should not be ongoing (should not be in between relase and end dates)
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
