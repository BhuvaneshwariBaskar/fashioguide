if(process.env.NODE_ENV !== 'production') require('dotenv').config()
const { Sequelize } = require("sequelize");

const db = {}

const sequelize = new Sequelize.Sequalize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:'postgres',
    logging:false
})

sequalize.authenticate()
.then(()=>console.log('DATABASE CONNECTED'))
.catch(err=>console.log('ERROR:' +err))

db.Sequalize=Sequalize
db.sequalize=sequalize

module.exports = db