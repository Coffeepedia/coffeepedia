const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController.js");
const errorHandler = require("../middlewares/errorHandler.js");
const itemRouter = require("./itemRouter.js");

router.get("/");

router.post(
  "/register",
  // authentication,
  // isAdmin,
  AuthController.register
);

router.post("/login", AuthController.login);

router.use("/items", itemRouter);

router.use(errorHandler);

module.exports = router;
