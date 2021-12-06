"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Work List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Personal List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {} // config object
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
