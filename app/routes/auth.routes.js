module.exports = (app) => {
  const AuthController = require("../controllers/auth.controller");
  const router = require("express").Router();
  const {
    emailRegistration,
    passwordValidation,
    checkRules,
  } = require("../middlewares/user-validation.js");

  router.post(
    "/register",
    [passwordValidation, emailRegistration],
    checkRules,
    AuthController.register
  );

  app.use("/api/auth", router);
};
