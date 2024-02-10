const express = require("express");
const {
  fetchDress,
  addWishList,
  orders,
  addRemoveToCart,
  removeFromCart,
  getCart,
  getWishList,
} = require("../controllers/dresses.controller");
const { signUpPost, login } = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register").post(signUpPost);
router.route("/dress").get(fetchDress);
router.route("/wishlist").post(addWishList);
router.route("/getwishlist").post(getWishList);
router.route("/orders").post(orders);
router.route("/login").post(login);
router.route("/addremovecart").post(addRemoveToCart);
router.route("/removecart").post(removeFromCart);
router.route("/getcart").post(getCart);

module.exports = router;
