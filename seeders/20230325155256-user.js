"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        username: "jhondoe123",
        email: "john.doe@gmail.com",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW"),
      },
      {
        username: "janedoe123",
        email: "jane.doe@gmail.com",
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
