const { Sequelize } = require("sequelize");
const categoryModel = require("./categoryModel");

const dressModel = (sequelize) => {
  const { DataTypes } = Sequelize;

  return sequelize.define("Dresses", {
    dress_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    dress_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    category_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
          model: 'Categories', // This is the name of the target model (case-sensitive)
          key: 'category_id'
      }
    },
    brand: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    image: {
      type: DataTypes.JSON,
      defaultValue: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
  });
};
module.exports = dressModel;
