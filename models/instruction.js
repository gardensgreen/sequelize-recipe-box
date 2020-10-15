"use strict";
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define(
    "Instruction",
    {
      specification: {
        type: DataTypes.TEXT,
        vaildate: { notEmpty: true },
      },
      listOrder: {
        type: DataTypes.INTEGER,
        vaildate: { min: 0 },
      },
      recipeId: DataTypes.INTEGER,
    },
    {}
  );
  Instruction.associate = function (models) {
    // associations can be defined here
    Instruction.belongsTo(models.Recipe, { foreignKey: "recipeId" });
  };
  return Instruction;
};
