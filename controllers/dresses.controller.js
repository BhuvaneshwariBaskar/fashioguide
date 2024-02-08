const { Dress, User } = require("../database/database");
const { Op } = require("sequelize");

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
      return res.status(404).json({ error: "User not found" });
    }
    user.bag = bag;
    await user.save();

    //remove wishlist-get
    return res.json("OKAY");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
//GetCart
exports.getCart = async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log(user_id);
  
    const user = await User.findOne({ where: { user_id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    let bag = user.bag;
    console.log(bag);
    const DressList = await Dress.findAll({
      where: {
        dress_id: {
          [Op.in]: bag,
        },
      },
    });
    console.log(DressList);
    return res.status(200).json({ message: "Okay", DressList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.addWishList = async (req, res) => {
  try {
    const { wishlist, user_id } = req.body;
    let user = await User.findOne({ where: { user_id } });
    console.log(user_id);
    console.log(user);

    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    user.wishlist = wishlist;
    await user.save();

    return res.json("OKAY");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//getwishlist

exports.getWishList = async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log(user_id);
    const user = await User.findOne({ where: { user_id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    let wishlist = user.wishlist;
    console.log(wishlist);
    const WishList = await Dress.findAll({
      where: {
        dress_id: {
          [Op.in]: wishlist,
        },
      },
    });
    console.log(WishList);
    return res.status(200).json({ message: "Okay", WishList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//addorders
exports.orders = async (req, res) => {
  try {
    const { order, user_id } = req.body;
    let user = await User.findOne({ where: { user_id } });
    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    user.order = order;
    await user.save();

    return res.json("OKAY");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//getorders