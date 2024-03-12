if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express');
const db = require('./database/database');
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require('body-parser');


const authRoute = require("./routes/auth.routes");


const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(cors());

app.use("/api", authRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});



let port = "8000";

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
