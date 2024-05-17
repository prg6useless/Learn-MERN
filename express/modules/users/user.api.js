const router = require("express").Router();
const { roleMiddleWare } = require("../../utils/secure");
const { validator } = require("./user.validator");

const userController = require("./user.controller");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload");
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

//register user
router.post(
  "/register",
  upload.single("profile"),
  validator,
  async (request, response, next) => {
    try {
      if (request.file) {
        request.body.profile = request.file.path;
        s;
      }
      const result = await userController.create(request.body);
      response.json({ msg: "register successful", data: result });
    } catch (error) {
      next(error); // sends control flow/ error to app.js
    }
  }
);

//login user
router.post("/login", async (request, response, next) => {
  try {
    const result = await userController.login(request.body);
    response.json({ msg: "User successfully logged in", data: result });
  } catch (error) {
    next(error); // sends control flow or the error to app.js
  }
});

// otp token generation
router.post("/generate-email-token", async (request, response, next) => {
  try {
    const result = await userController.generateToken(request.body);
    response.json({ msg: "Generated User Token", data: result });
  } catch (error) {
    next(error); // sends control flow or the error to app.js
  }
});

// email verification
router.post("/verify-email", async (request, response, next) => {
  try {
    const result = await userController.verifyEmail(request.body);
    response.json({ msg: "Email Verification Successful", data: result });
  } catch (error) {
    next(error); // sends control flow or the error to app.js
  }
});

//get all users
router.get("/", roleMiddleWare(["admin"]), (req, res, next) => {
  try {
    res.json({ msg: "All users" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
