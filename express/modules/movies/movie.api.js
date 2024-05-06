const router = require("express").Router();
const data = require("./movieData");

router.get("/", (req, res, next) => {
  try {
    res.json({ data });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
