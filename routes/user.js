const router = require("express").Router();
const { register, login } = require("../controllers/user");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
