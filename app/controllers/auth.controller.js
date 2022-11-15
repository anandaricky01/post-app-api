const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.users;

exports.register = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10);

  const checkUser = await User.findOne({ email: email });
  if (checkUser)
    return res.send({ message: "Duplicated Data Found", data: checkUser });

  const user = new User({
    name: name,
    email: email,
    password: password,
  });

  user
    .save(user)
    .then((result) => {
      console.log("User has been created!");
      return res.send({
        message: "User has been created!",
        user: result,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while creating data!",
      });
    });
};
