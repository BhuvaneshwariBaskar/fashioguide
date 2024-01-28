const {  Dress, User } = require("../database/database");

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

exports.addRemoveCart=async(req,res)=>{

  try {
    const { bag } = req.body;
    const { user_id } = req.params;
    let result= await User.update(
      {cart: bag},
      {returning: true,where: {user_id}}
    )
    console.log(result);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json('OKAY');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

}


