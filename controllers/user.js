const { User } = require("../models");
const { hashPassword, verifyPassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

module.exports = {
  login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({
      where: { email },
    })
      .then((data) => {
        if (data) {
          if (verifyPassword(password, data.password)) {
            const token = createToken({
              username: data.username,
              email: data.email,
            });

            res.status(200).json({
              token,
              message: "success login",
            });
          } else {
            next({
              statusCode: 400,
              message: "password invalid",
            });
          }
        } else {
          next({
            statusCode: 404,
            message: "user not found",
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  },
  register(req, res, next) {
    const { username, email, password } = req.body;
    const hashPass = hashPassword(password);

    User.create({
      username,
      email,
      password: hashPass,
    })
      .then((data) => {
        res.status(201).json({
          data,
          message: "success create user",
        });
      })
      .catch(next);
  },
};
