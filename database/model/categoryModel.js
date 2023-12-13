const { Sequelize } = require("sequelize");
const categoryModel = (sequelize) => {
  const { DataTypes } = Sequelize;

  return sequelize.define("Categories", {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
module.exports = categoryModel ;