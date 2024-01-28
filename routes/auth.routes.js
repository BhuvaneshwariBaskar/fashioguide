const express = require("express");
const { fetchDress, addRemoveCart, getCart } = require("../controllers/dresses.controller");
const { signUpPost, login, addWishList} = require("../controllers/auth.controller");


const router = express.Router();

router.route("/register").post(signUpPost);
router.route("/dress").get(fetchDress);
router.route("/wishlist").post(addWishList);
router.route("/login").post(login);
router.route("/addcart").post(addRemoveCart);
router.route("/getcart").get(getCart);



module.exports = router;
