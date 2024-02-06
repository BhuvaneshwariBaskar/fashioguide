const express = require("express");
const { fetchDress , addWishList, orders} = require("../controllers/dresses.controller");
const { signUpPost, login} = require("../controllers/auth.controller");


const router = express.Router();

router.route("/register").post(signUpPost);
router.route("/dress").get(fetchDress);
router.route("/wishlist").post(addWishList);
router.route("/orders").post(orders);
router.route("/login").post(login);

module.exports = router;