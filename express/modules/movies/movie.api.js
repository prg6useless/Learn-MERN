const router = require("express").Router();
const movieController = require("./movie.controller");
const { secureMiddleWare } = require("../../utils/secure");

// create new movie
router.post("/", secureMiddleWare(["admin"]), async (req, res, next) => {
  try {
    const result = await movieController.create(req.body);
    res.json({ msg: "movie Created", data: result });
  } catch (e) {
    next(e);
  }
});

// get all movies
router.get("/", async (req, res, next) => {
  try {
    const result = await movieController.list();
    res.json({ msg: "All movies", data: result });
  } catch (e) {
    next(e);
  }
});

// get movie by id
router.get("/:id", async (req, res, next) => {
  try {
    const result = await movieController.getById(req.params.id);
    res.json({ msg: `movie id : ${req.params.id}`, data: result });
  } catch (e) {
    next(e);
  }
});

//update movie  by id
router.put("/:id", secureMiddleWare(["admin"]), async (req, res, next) => {
  try {
    const result = await movieController.update(req.params.id, req.body);
    res.json({ msg: "movie updated", data: result });
  } catch (e) {
    next(e);
  }
});

//delete movie by id
router.delete("/:id", secureMiddleWare(["admin"]), async (req, res, next) => {
  try {
    const result = await movieController.remove(req.params.id);
    res.json({ msg: "movie updated", data: result });
  } catch (e) {
    next(e);
  }
});

//update seats for one movie by id
router.patch(
  "/:id/seats",
  secureMiddleWare(["admin"]),
  async (req, res, next) => {
    try {
      const result = await movieController.updateSeats(req.params.id, req.body);
      res.json({
        msg: "seats has been updated",
        data: result,
      });
    } catch (e) {
      next(e);
    }
  }
);

//change release date of one movie by id
router.patch(
  "/:id/release-date",
  secureMiddleWare(["admin"]),
  async (req, res, next) => {
    try {
      const result = await movieController.updateReleaseDate(
        req.params.id,
        req.body
      );
      res.json({
        msg: "release data has been updated",
        data: result,
      });
    } catch (e) {
      next(e);
    }
  }
);

module.exports = router;
