const { body } = require("express-validator");
const db = require("../models/index");
const User = db.users;

exports.emailRegistration = body("email", "Please enter a valid email format!")
  .isEmail()
  .custom((value) => {
    return User.findOne({ email: value }).then((result) => {
      if (result) return Promise.reject("Email has been registered!");
    });
  })
  .normalizeEmail();

exports.passwordValidation = body("password", "Please enter atleast 6 alphanumeric length password").isLength({ min: 7 });
