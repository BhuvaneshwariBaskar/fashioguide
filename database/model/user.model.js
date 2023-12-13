const { Sequelize } = require("sequelize");

const userModel = (sequelize) => {
  const { DataTypes } = Sequelize;

  return sequelize.define('Users', {
    user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      pincode: {
        type: DataTypes.STRING,
      },
      profileimg: {
        type: DataTypes.STRING, // You may want to store the path or URL to the image
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
            min: 13, max: 13
        },
      },
      gender: {
        type: DataTypes.STRING,
      },
      orderList: {
        type: DataTypes.JSON,
        defaultValue: [] // Array of dress IDs for orders
      },
      wishlist: {
        type: DataTypes.JSON,
        defaultValue: [] // Array of dress IDs for wishlist
      },
      history: {
        type: DataTypes.JSON,
        defaultValue: [] // Array of dress IDs for history
      },
      recentSearchWords: {
        type: DataTypes.JSON,
        defaultValue: []// Array of recent search words
      },
      bag: {
        type: DataTypes.JSON,
        defaultValue: [] // Array of dress IDs for the shopping bag
      },
  });
  
};
module.exports =userModel;