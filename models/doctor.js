'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doctor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profilePicturePath: DataTypes.STRING,
    doctolibUrl: DataTypes.STRING,
    conventionType: DataTypes.INTEGER,
    presentation: DataTypes.STRING,
    vitalCard: DataTypes.BOOLEAN,
    tiersPayant: DataTypes.STRING,
    diplomes: DataTypes.ARRAY,
    rpps: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};