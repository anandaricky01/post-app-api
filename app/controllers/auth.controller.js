module.exports = (app) => {
  const router = require("express").Router();
  const db = require("../models");
  const User = db.users;
  const { validationResult, check } = require("express-validator");

  router.post(
    "/register",
    [
      check("email").isEmail().withMessage("Use Valid Email!"),
      check("password")
        .isLength({ min: 7 })
        .withMessage("must be at least 7 chars long"),
    ],
    (req, res) => {
      const err = validationResult(req);
      if(!err.isEmpty()) return res.status(400).json({ errors: err.array() });
      return res.send(req.body);
    }
  );

  app.use("/api/auth", router);
};
