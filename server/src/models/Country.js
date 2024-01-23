const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Country", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
     },
     name: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     flag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
     },
     continent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
     },
     capital: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     subregion: {
      type: DataTypes.STRING,
      allowNull: true,
     },
     area: {
      type: DataTypes.STRING,
      allowNull: true,
     },
     population: {
      type: DataTypes.INTEGER,
      allowNull: false,
     },
  },{timestamps: false});
};