const express = require("express");
const router = express.Router();
const movieRouter = require("../modules/movies/movie.api");
const orderRouter = require("../modules/orders/order.api");
const userRouter = require("../modules/users/user.api");

// we use express middleware to handle errors
// two types of error :
// application level error and routing level error
router.get("/api/v1", (req, res, next) => {
  try {
    res.json({ msg: "MovieMate API is working" });
  } catch (e) {
    next(e);
  }
});

router.use("/api/v1/movies", movieRouter);
router.use("/api/v1/orders", orderRouter);
router.use("/api/v1/users", userRouter);

module.exports = router;
