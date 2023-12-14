const db = require("../database");

exports.fetchDress = async (req, res) => {
  await db.query("SELECT * FROM Dresses", (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(response);
    }
  });
};