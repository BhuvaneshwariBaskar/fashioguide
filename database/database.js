const { Sequelize } = require("sequelize");
const userModel = require("./model/user.model");
const dressModel = require("./model/dresses.model");
const categoryModel = require("./model/categoryModel");

const db = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
    }
  );

  try {
    // Authenticate
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Define models
    const User = userModel(sequelize);
    const Dress = dressModel(sequelize);
    const Category = categoryModel(sequelize);

    //Sync database

    // await sequelize.sync({ force: true });
    // console.log("Tables synchronized!");

    // await Dress.sync({ force: true });
    // console.log("Tables synchronized!");


  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = db;
