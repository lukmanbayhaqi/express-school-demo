const router = require("express").Router();
const {
  addTeacher,
  findAllTeachers,
  editTeacher,
  destroyTeacher,
} = require("../controllers");

router.get("/", findAllTeachers);
router.post("/", addTeacher);
router.put("/:id", editTeacher);
router.delete("/:id", destroyTeacher);

module.exports = router;
