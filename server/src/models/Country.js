const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Country", {
    cca3: {
      type: DataTypes.STRING,
    },
    nameOfficial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameCommon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
    },
    continent: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  },{timestamps: false});
};