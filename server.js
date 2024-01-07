if(process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express');
const db = require('./database/database');
const cors = require("cors");
const morgan = require("morgan");


const authRoute = require("./routes/auth.routes");


const app = express();
app.use(express.json());
db();

app.use(morgan("dev"));
app.use(cors());

app.use("/api", authRoute);
app.post("/register",authRoute);
app.post("/loginPost",authRoute);
app.get('/', (req, res) => {
  res.send('Hello World!');
});



const port="8080";

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});