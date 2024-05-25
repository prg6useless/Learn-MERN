// day 36 - User CRUD Operations

const router = require("express").Router();
const { secureMiddleWare } = require("../../utils/secure");
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

// Day 37 - User Profile and Role Checks
//get all users
router.get("/", secureMiddleWare(["admin"]), async (req, res, next) => {
  try {
    // advanced operations required -> pagination, sort, filter, search
    const { page, limit, name, email, role } = req.query;
    const filter = { role };
    const search = { name, email };
    const data = await userController.list({ page, limit, filter, search });
    res.json({ msg: "All users", data });
  } catch (e) {
    next(e);
  }
});

// block a user (by admin) set isActive:false
router.patch(
  "/:id/block",
  secureMiddleWare(["admin"]),
  async (req, res, next) => {
    try {
      const result = await userController.blockUser(req.params.id);
      res.json({ msg: "User status updated successfully", data: result });
    } catch (e) {
      next(e);
    }
  }
);

// delete a user
router.delete("/:id", secureMiddleWare(["admin"]), async (req, res, next) => {
  try {
    const result = await userController.removeById(req.params.id);
    res.json({ msg: "Deleted User", data: result });
  } catch (e) {
    next(e);
  }
});

// get my profile
router.get("/profile", secureMiddleWare(), async (req, res, next) => {
  try {
    const result = await userController.getProfile(req.currentUser);
    res.json({ msg: "User Profile Generated", data: result });
  } catch (e) {
    next(e);
  }
});
// ----------------------------------

// Day 38  - User Remaining APIs
// update profile
router.put("/profile", secureMiddleWare(), async (req, res, next) => {
  try {
    const result = await userController.updateById(req.currentUser, req.body);
    res.json({ msg: "Updated User Profile Successfully", data: result });
  } catch (e) {
    next(e);
  }
});

// get user details
router.get("/:id", secureMiddleWare(["admin"]), async (req, res, next) => {
  try {
    const result = await userController.getById(req.params.id);
    res.json({ msg: "User detail generated", data: result });
  } catch (e) {
    next(e);
  }
});

// // update user details
// router.patch("/:id", secureMiddleWare(["admin"]), async (req, res, next) => {
//   try {
//     const result = await userController.getById(req.params.id);
//     res.json({ msg: "User detail generated", data: result });
//   } catch (e) {
//     next(e);
//   }
// });

// change password
router.patch(
  "/change-password",
  secureMiddleWare(["admin", "user"]),
  async (req, res, next) => {
    try {
      const result = await userController.changePassword(
        req.currentUser,
        req.body
      );
      res.json({ msg: "Password Changed Successfuly", data: result });
    } catch (e) {
      next(e);
    }
  }
);

// reset password (by admin) send email
router.patch(
  "/reset-password",
  secureMiddleWare(["admin"]),
  async (req, res, next) => {
    try {
      const { id, newPassword } = req.body;
      const result = await userController.resetPassword(id, newPassword);
      res.json({ msg: "Password reset successfully", data: result });
    } catch (e) {
      next(e);
    }
  }
);

// forget password, send otp email to user
router.post("/forget-password-token", async (req, res, next) => {
  try {
    const result = await userController.forgetPasswordTokenGeneration(req.body);
    res.json({ msg: "OTP sent to email", data: result });
  } catch (e) {
    next(e);
  }
});

// forget password change password
router.post("/forget-password-change", async (req, res, next) => {
  try {
    const result = await userController.forgetPasswordChangePass(req.body);
    res.json({ msg: "Password Changed Successfully", data: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
