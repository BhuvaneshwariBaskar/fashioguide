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

//addwishlist-id-post(update)

// exports.addWishList = async (req, res) => {
//   try {
//     const { wishlist } = req.body;
//     const { user_id } = req.params;
//     let user = await User.findOne({ where: { user_id }, raw: true });
//     if (!user) {
//       return res.status(401).json({
//         error: "User not found",
//       });
//     }

//     user.wishlist = wishlist;
//     await user.save();

//     return res.json("OKAY");
//   } 
//   catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };


//remove wishlist-get