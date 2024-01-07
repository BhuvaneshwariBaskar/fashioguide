const {  Dress } = require("../database/database");

exports.fetchDress = async (req, res) => {
  try {
    let Dresses = await Dress.findAll({ raw: true });
    if (Dresses.length === 0) {
      console.log("No dresses found");
      return res.status(404).json({ message: "No dresses found" });
    }else {
      res.status(200).json(Dresses);
    }
  } catch (error) {
    console.error("Error fetching dress:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};