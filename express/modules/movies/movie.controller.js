// CRUD operations
const movieModel = require("./movie.model");
const { slugger } = require("../../utils/text");

// movie create {create}
// movie list {list}
// get one movie {getById}
// update releaseDate {updateReleaseDate}
// update movieDetails {update}
// delete movie {remove} // check whether movie's ticket has been sold
// update seats {updateSeats}

const create = async (payload) => {
  // create slug from title eg : The Invincibles slug->the-invincibles {use slugify package in /utils}
  const slugTitle = slugger(payload.title);
  // check if slug exists in database
  const movie = await movieModel.findOne({ slug: slugTitle });
  if (movie) throw new Error("Movie title already exists");
  // create movie
  payload.slug = slugTitle;
  return await movieModel.create(payload);
};

const list = async () => {
  return await movieModel.find();
};

const getBySlug = async (slug) => {
  return await movieModel.findOne({ slug });
};

const update = async (slug, payload) => {
  // TODO check if movie exists and also use slug instead of id
  return await movieModel.findOneAndUpdate({ slug }, payload, { new: true });
};

const updateReleaseDate = async (slug, payload) => {
  // check if releaseDate is older than today {use moment, luxon, date-fns}
  return await movieModel.findOneAndUpdate({ slug }, payload, { new: true });
};

const updateSeats = async (slug, payload) => {
  // check if the movie seats are less than defined number(process.env.MIN_SEATS)
  return await movieModel.findOneAndUpdate({ slug }, payload, { new: true });
};

const remove = async (slug) => {
  // movie's ticket must not have been sold
  // the movie should not be ongoing (should not be in between relase and end dates)
  return await movieModel.deleteOne({ slug });
};

module.exports = {
  create,
  list,
  getBySlug,
  update,
  updateReleaseDate,
  updateSeats,
  remove,
};
