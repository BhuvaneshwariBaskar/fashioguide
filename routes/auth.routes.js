const express = require("express");
const { signUpPost,loginPost} = require("../controllers/auth.controller");
const { fetchDress } = require("../controllers/dresses.controller");

const router = express.Router();

router.route("/register").post(signUpPost);
router.route("/login").post(loginPost);
router.route("/dress").get(fetchDress);

module.exports = router;