const router = require("express").Router();

const { secureMiddleWare } = require("../../utils/secure");

// get all movies
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "All Movies" });
  } catch (e) {
    next(e);
  }
});

// create new movie
router.post("/", secureMiddleWare(["admin"]), (req, res, next) => {
  try {
    const { movieName, quantity } = req.body;
    res.json({ msg: "movie Created" });
  } catch (e) {
    next(e);
  }
});

// get movie by id
router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `movie id : ${id}` });
  } catch (e) {
    next(e);
  }
});

//update movie  by id
router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `updated movie of id : ${id}` });
  } catch (e) {
    next(e);
  }
});

//delete movie by id
router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `deleted movie of id : ${id}` });
  } catch (e) {
    next(e);
  }
});

//update seats for one movie by id
router.patch("/:id/seats", (req, res, next) => {
  try {
    const { id } = req.params;
    const { seats } = req.body;
    res.json({
      msg: `seats for movie of id : ${id} has been updated to ${seats} seats available`,
    });
  } catch (e) {
    next(e);
  }
});

//change release date of one movie by id
router.patch("/:id/release-date", (req, res, next) => {
  try {
    const { id } = req.params;
    const { releaseDate } = req.body;
    res.json({
      msg: `Release Date of movie of id : ${id} has been updated to ${releaseDate}`,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
