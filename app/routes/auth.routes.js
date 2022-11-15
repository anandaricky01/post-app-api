module.exports = (app) => {
  const AuthController = require("../controllers/auth.controller");
  const router = require("express").Router();
  const {
    emailRegistration,
    passwordValidation
  } = require("../middlewares/user-validation");
  const {checkRules} = require("../middlewares/checkRules");

  router.post(
    "/register",
    [passwordValidation, emailRegistration],
    checkRules,
    AuthController.register
  );

  app.use("/api/auth", router);
};
