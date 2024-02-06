const express = require("express");
<<<<<<< HEAD
const { fetchDress , addWishList, orders} = require("../controllers/dresses.controller");
const { signUpPost, login} = require("../controllers/auth.controller");
=======
const { fetchDress, addRemoveCart, getCart } = require("../controllers/dresses.controller");
const { signUpPost, login, addWishList} = require("../controllers/auth.controller");
>>>>>>> 3f9b86b003d971556fc3ba1030df23734222a851


const router = express.Router();

router.route("/register").post(signUpPost);
router.route("/dress").get(fetchDress);
router.route("/wishlist").post(addWishList);
router.route("/orders").post(orders);
router.route("/login").post(login);
router.route("/addcart").post(addRemoveCart);
router.route("/getcart").get(getCart);



module.exports = router;
