const { Sequelize } = require("sequelize");
const userModel = require("./model/user.model");
const dressModel = require("./model/dresses.model");
const categoryModel = require("./model/categoryModel");
const Dress = [
  {
    dress_name: "Hooded Sweatshirt with Front Zip Closure",
    category_id:"31f0eb30-83ce-49a5-aebd-0b1f4aa52ff1",
    brand: "instafab-plus",
    size: ["XS", "S", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210813/WKWD/6116b8ba7cdb8cb824f71c10/-286Wx359H-462694882-yellow-MODEL.jpg",
    price: 2399,
    rating: 3,
    gender: "Women",
  },
  {
    dress_name: "Daisy Print Sweatshirt with Ripped Hems",
    category_id:"31f0eb30-83ce-49a5-aebd-0b1f4aa52ff1",
    brand: "kazo",
    size: ["XS", "S", "M", "L", "XL"],
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210403/splG/606931197cdb8c1f1482bcf0/-286Wx359H-462028980-black-MODEL.jpg",
    price: 2790,
    rating: 5,
    gender: "Women",
  },
]

// console.log(Dress);

const db = {};
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);
sequelize
  .authenticate()
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => console.log("ERROR: " + err));
// Define models
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = userModel(sequelize);
db.Dress = dressModel(sequelize);
db.Category = categoryModel(sequelize);
//Sync database

// await sequelize.sync({ force: true });
// console.log("Tables synchronized!");

// db.User.sync({ force: true });
// console.log("Tables synchronized!");

// db.Category.sync({ force: true });
// console.log("Tables synchronized!");

// db.Dress.sync({ force: true });
//     console.log("Tables synchronized!");

// Category Creation

// const bulkCreate=[{
//   category_name: 'T-shirt',
// },{
//   category_name: 'Trousers',
// },{
//   category_name: 'Shirt',
// },
// {
//   category_name: 'Jeans',
// },
// {
//   category_name: 'Sweatshirt',
// },
// {
//   category_name: 'Top',
// },
// {
//   category_name: 'Kurta',
// },
// {
//   category_name: 'Women T-shirt',
// },
// {
//   category_name: 'Dress',
// }]
// db.Category.bulkCreate(bulkCreate)
// .then((bulkCreate) => {
//   console.log('Categories created:', bulkCreate.map(category => category.toJSON()));
// })
// .catch((error) => {
//   console.error('Error creating categories:', error);
// })
// .finally(() => {
//   sequelize.close(); // Close the Sequelize connection when done
// });

// Dress Creation

// db.Dress.bulkCreate(Dress)
//   .then((bulkCreate) => {
//     console.log(
//       "Dress Created :",
//       bulkCreate.map((category) => category.toJSON())
//     );
//   })
//   .catch((error) => {
//     console.error("Error creating Dress:", error);
//   })
//   .finally(() => {
//     sequelize.close(); // Close the Sequelize connection when done
//   });

module.exports = db;
