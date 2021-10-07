const {
  createTeacher,
  getAllTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../models");

module.exports = {
  addTeacher(req, res) {
    createTeacher(req.body)
      .then((data) => {
        res.status(201).json({
          data,
          message: "success create teacher",
        });
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message: "error create teacher",
        });
      });
  },
  async findAllTeachers(req, res) {
    try {
      const allTeachers = await getAllTeachers();

      res.status(200).json({
        data: allTeachers,
        message: "suksesss get all teachers data",
      });
    } catch (err) {
      res.status(500).json({
        err,
        message: "failed to get all teachers data",
      });
    }

    // getAllTeachers()
    //   .then((data) => {
    //     res.status(200).json({
    //       data,
    //       message: "success get all teachers data",
    //     });
    //   })
    //   .catch((err) => {
    //     res.status(500).json({
    //       err,
    //       message: "failed to get all teachers data",
    //     });
    //   });
  },
  editTeacher(req, res) {
    const id = req.params.id;

    updateTeacher(id, req.body)
      .then((data) => {
        res.status(200).json({
          data,
          message: "success update teacher",
        });
      })
      .catch((err) => {
        res.status(err).json({
          err,
          message: "error update teacher",
        });
      });
  },
  destroyTeacher(req, res) {
    const id = req.params.id;

    deleteTeacher(id)
      .then((data) => {
        res.status(200).json({
          data,
          message: "Success delete teacher",
        });
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message: "Failed to delete teacher",
        });
      });
  },
};
