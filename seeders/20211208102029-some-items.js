"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Workout",
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Do laundry",
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "shopping",
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy gifts",
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Get a haircut",
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Finish work",
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {} // config object
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
