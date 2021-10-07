const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

function authentication(req, res, next) {
  const token = req.headers.token;
  const verifiedToken = verifyToken(token);

  User.findOne({
    where: {
      email: verifiedToken.email,
    },
  })
    .then((data) => {
      if (data) {
        next();
      } else {
        res.status(400).json({
          message: "You haven't access to this action!",
        });
      }
    })
    .catch(next);
}

module.exports = authentication;
