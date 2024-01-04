const express = require("express");
const { signUpPost,loginPost} = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register").post(signUpPost);
router.route("/login").post(loginPost);

module.exports = router;