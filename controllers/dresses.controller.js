const { Dress, User } = require("../database/database");

exports.fetchDress = async (req, res) => {
  try {
    let Dresses = await Dress.findAll({ raw: true });
    if (Dresses.length === 0) {
      console.log("No dresses found");
      return res.status(404).json({ message: "No dresses found" });
    } else {
      res.status(200).json(Dresses);
    }
  } catch (error) {
    console.error("Error fetching dress:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.addRemoveCart = async (req, res) => {
  try {
    const { bag, user_id } = req.body; // Remove the extra nesting
    console.log(user_id);
    const user = await User.findOne({ where: { user_id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }   
    user.bag= bag;
    await user.save();

    return res.json("OKAY");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
//GetCart
exports.getCart= async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log(user_id);
    const user = await User.findOne({ where: { user_id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }   
    let bag=user.bag;
    await user.save();

    return res.json("OKAY");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
  // await db.query(
  //   "select favorites from user_table where user_id= ? ",
  //   [user_id],
  //   async (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(409).json({ err });
  //     }
  //     const favorites = JSON.parse(result.length && result[0].favorites);
  //     await db.query(
  //       "select * from music_table where music_id IN (?)",
  //       [favorites],
  //       async (err, result) => {
  //         if (err) {
  //           console.log(err);
  //           return res.status(409).json({ err });
  //         }
  //         return res.json(result);
  //       }
  //     );
  //   }
  // );
};