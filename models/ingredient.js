"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      amount: DataTypes.DECIMAL,
      measurementUnitId: DataTypes.INTEGER,
      foodStuff: {
        type: DataTypes.STRING,
        vaildate: { notEmpty: true },
      },
      recipeId: DataTypes.INTEGER,
    },
    {}
  );
  Ingredient.associate = function (models) {
    // associations can be defined here
    Ingredient.belongsTo(models.Recipe, { foreignKey: "recipeId" });
    Ingredient.belongsTo(models.MeasurementUnit, {
      foreignKey: "measurementUnitId",
    });
  };
  return Ingredient;
};
