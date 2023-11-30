if(process.env.NODE_ENV !== 'production') require('dotenv').config()
const { Sequelize } = require("sequelize");

const db = {}

const sequelize = new Sequelize.Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:'postgres',
    logging:false
})

sequelize.authenticate()
.then(()=>console.log('DATABASE CONNECTED'))
.catch(err=>console.log('ERROR:' +err))

db.Sequelize=Sequelize
db.sequelize=sequelize
db.User=require("./model/user.model")(sequelize, Sequelize.DataTypes)
db.Dresses=require("./model/dresses.model")(sequelize, Sequelize.DataTypes)

module.exports = db