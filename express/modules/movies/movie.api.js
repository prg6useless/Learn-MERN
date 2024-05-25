const router = require("express").Router();
const movieController = require("./movie.controller");
const { secureMiddleWare } = require("../../utils/secure");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/movies");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname.concat(
        "-",
        Date.now(),
        ".",
        file.originalname.split(".")[1]
      )
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // in bytes (1 MB = 1000000 bytes)
});

// create new movie
router.post(
  "/",
  secureMiddleWare(["admin"]),
  upload.single("poster"),
  async (req, res, next) => {
    try {
      if (req.file) {
        req.body.poster = req.file.path;
      }
      req.body.createdBy = req.currentUser;
      const result = await movieController.create(req.body);
      res.json({ msg: "Created new movie", data: result });
    } catch (e) {
      next(e);
    }
  }
);

// get all movies
router.get("/", async (req, res, next) => {
  try {
    const result = await movieController.list();
    res.json({ msg: "All movies", data: result });
  } catch (e) {
    next(e);
  }
});

// get movie by slug
router.get("/:slug", async (req, res, next) => {
  try {
    const result = await movieController.getBySlug(req.params.slug);
    res.json({ msg: `Movie slug : ${req.params.slug}`, data: result });
  } catch (e) {
    next(e);
  }
});

//update movie  by slug
router.put(
  "/:slug",
  secureMiddleWare(["admin"]),
  upload.single("poster"),
  async (req, res, next) => {
    try {
      if (req.file) {
        req.body.poster = req.file.path;
      }
      req.body.updatedBy = req.currentUser;
      const result = await movieController.update(req.params.slug, req.body);
      res.json({ msg: "Movie updated successfully", data: result });
    } catch (e) {
      next(e);
    }
  }
);

//delete movie by slug
router.delete("/:slug", secureMiddleWare(["admin"]), async (req, res, next) => {
  try {
    const result = await movieController.remove(req.params.slug);
    res.json({ msg: "Movie deleted succesfully", data: result });
  } catch (e) {
    next(e);
  }
});

//update seats for one movie by slug
router.patch(
  "/:slug/seats",
  secureMiddleWare(["admin"]),
  async (req, res, next) => {
    try {
      req.body.updatedBy = req.currentUser;
      const result = await movieController.updateSeats(
        req.params.slug,
        req.body
      );
      res.json({
        msg: "No of seats has been updated",
        data: result,
      });
    } catch (e) {
      next(e);
    }
  }
);

//change release date of one movie by id
router.patch(
  "/:slug/release-date",
  secureMiddleWare(["admin"]),
  async (req, res, next) => {
    try {
      req.body.updatedBy = req.currentUser;
      const result = await movieController.updateReleaseDate(
        req.params.slug,
        req.body
      );
      res.json({
        msg: "Movie release data has been updated",
        data: result,
      });
    } catch (e) {
      next(e);
    }
  }
);

module.exports = router;
