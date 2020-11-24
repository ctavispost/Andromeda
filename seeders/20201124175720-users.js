'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });
    await queryInterface.bulkInsert('users', [{
      name: "Aaron Smith",
      email: "John@smith.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Amy Adams",
      email: "Amy@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Arnold Adams",
      email: "Arnold@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Fred George",
      email: "Fred@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "George Gay",
      email: "George@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      name: "Gary Wilson",
      email: "Gary@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Howard Wilson",
      email: "Howard@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kaleb Adams",
      email: "Kaleb@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mary Smith",
      email: "Mary@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Oscar Valentine",
      email: "Oscar@me.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};