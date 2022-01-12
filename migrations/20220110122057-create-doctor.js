'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      profilePicturePath: {
        type: Sequelize.STRING
      },
      doctolibUrl: {
        type: Sequelize.STRING
      },
      conventionType: {
        type: Sequelize.INTEGER
      },
      presentation: {
        type: Sequelize.STRING
      },
      vitalCard: {
        type: Sequelize.BOOLEAN
      },
      tiersPayant: {
        type: Sequelize.STRING
      },
      diplomes: {
        type: Sequelize.ARRAY
      },
      rpps: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctors');
  }
};