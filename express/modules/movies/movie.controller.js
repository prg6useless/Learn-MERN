// CRUD operations
const movieModel = require("./movie.model");
const { slugger } = require("../../utils/text");
const moment = require("moment");

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
  if (payload.title) {
    payload.slug = slugger(payload?.title);
  }
  return await movieModel.findOneAndUpdate({ slug }, payload, { new: true });
};

const updateReleaseDate = async (slug, payload) => {
  // check if releaseDate is older than today {use moment, luxon, date-fns}
  return await movieModel.findOneAndUpdate({ slug }, payload, { new: true });
};

const updateSeats = async (slug, payload) => {
  const movie = await movieModel.findOne({ slug });
  if (!movie) throw new Error("Movie doesnt exist");
  // check if the movie seats are less than defined number(process.env.MIN_SEATS)
  if (payload.seats < process.env.MIN_SEATS)
    throw new Error(`Movie seats cant be less than ${process.env.MIN_SEATS}`);
  return await movieModel.findOneAndUpdate({ slug }, payload, { new: true });
};

const remove = async (slug) => {
  const movie = await movieModel.findOne({ slug });
  if (!movie) throw new Error("Movie doesnt exist");
  // TODO movie's ticket must not have been sold

  // the movie should not be ongoing (should not be in between relase and end dates)
  if (
    moment(movie?.releaseDate).isBefore(moment()) &&
    moment(movie?.endDate).isAfter(moment())
  ) {
    throw new Error(
      "Cannot delete movie since movie is currently in releasing phase"
    );
  }
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
