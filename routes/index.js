const router = require("express").Router();
const teacher = require("./teachers");
const user = require("./user");
const authentication = require("../middlewares/authentication");

router.use("/user", user);
router.use(authentication);
router.use("/teachers", teacher);

module.exports = router;
