const router = require("express").Router();
const { secureMiddleWare } = require("../../utils/secure");
const orderController = require("./order.controller");

//route level middleware
const middleWare = (req, res, next) => {
  const { username, password } = req.headers;
  if (username === "Saral" && password === "saral123") {
    next();
  }
  res.status(404).json({ msg: "User Unauthorized" });
};

// create new order
router.post("/", secureMiddleWare(), async (req, res, next) => {
  try {
    const result = await orderController.create(req.body);
    res.json({ msg: "Order Created", data: result });
  } catch (e) {
    next(e);
  }
});

// get all orders
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "All orders", data: req.body }); // req.body arriving from application level middleware
  } catch (e) {
    next(e);
  }
});

// get order by id
router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: "order" });
  } catch (e) {
    next(e);
  }
});

//delete order by id
router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `deleted order of id : ${id}` });
  } catch (e) {
    next(e);
  }
});

//change status by id
router.patch("/:id/status", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `status changed of order of id : ${id}` });
  } catch (e) {
    next(e);
  }
});

//update order  by id
router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `updated order of id : ${id}` });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
