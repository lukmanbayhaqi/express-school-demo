"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Teachers", [
      {
        first_name: "Joko",
        last_name: "Baskoro",
        email: "jokbas@mail.com",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Kuku",
        last_name: "Bima",
        email: "bima@mail.com",
        gender: "male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Dinda",
        last_name: "",
        email: "dinda@mail.com",
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
