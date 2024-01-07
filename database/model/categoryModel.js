const { Sequelize } = require("sequelize");
const categoryModel = (sequelize) => {
  const { DataTypes } = Sequelize;

  return sequelize.define("Categories", {
    category_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
   
  });
};
module.exports = categoryModel ;
