const { Teacher } = require("../models");

module.exports = {
  async getAllTeachers(req, res, next) {
    try {
      const teachers = await Teacher.findAll();

      res.status(200).json({
        teachers,
      });
    } catch (err) {
      next(err);
    }
  },
  async createTeacher(req, res, next) {
    try {
      const createTeacher = await Teacher.create(req.body);

      res.status(201).json({
        message: "Success add new teacher",
        data: createTeacher,
      });
    } catch (err) {
      next(err);
    }
  },
};
