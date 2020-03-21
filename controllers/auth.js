const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');

exports.postSignup = (req, res, next) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.password;

  
  User.findOne({ email }).then(user => {
    if (user) {
      return res.json({
        success: false,
        message: "User Already Register please Login"
      });
    }
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(pass, salt, (err, hash) => {
        const user = new User({
          name : name,
          email: email,
          password: hash
        });
        user
          .save()
          .then(result => {
            const userData = { id: result._id , name : result.name , email : result.email};
            return res.json({
              status: true,
              user : userData,
              message: "User Registered Successfully!!"
            });
          })
          .catch(err => {
            return res.json({ status: false, message: err });
          });
      });
    });
  });
};

