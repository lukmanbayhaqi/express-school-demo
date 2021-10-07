const router = require("express").Router();
const { getAllTeachers, createTeacher } = require("../controllers/teacher");

router.get("/", getAllTeachers);
router.post("/", createTeacher);

module.exports = router;
