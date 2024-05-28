const router = require("express").Router();
const { secureMiddleWare } = require("../../utils/secure");
const orderController = require("./order.controller");
const orderModel = require("./order.model");

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
router.get("/", secureMiddleWare(), async (req, res, next) => {
  try {
    const { page, limit, showAll } = req.query;
    const search = {
      id: showAll && req.isAdmin ? "" : req.currentUser,
    };
    const result = await orderController.list({ page, limit, search });
    res.json({ msg: "All orders", data: result }); // req.body arriving from application level middleware
  } catch (e) {
    next(e);
  }
});

// get order by id
router.get("/:id", secureMiddleWare(), async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await orderController.getById(id);
    res.json({ msg: `One single order with order id : ${id}`, data: result });
  } catch (e) {
    next(e);
  }
});

//change status by id
router.patch(
  "/:id/status",
  secureMiddleWare(["admin"]),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      req.body.approvedBy = req.currentUser;
      const result = await orderController.changeStatus(id, req.body);
      res.json({ msg: `status changed of order of id : ${id}`, data: result });
    } catch (e) {
      next(e);
    }
  }
);

//update order  by id
router.put("/:id", secureMiddleWare(["admin"]), async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await orderController.updateById(id, req.body);
    res.json({ msg: `updated order of id : ${id}`, data: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
