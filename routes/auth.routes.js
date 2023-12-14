const express = require("express");
const { signUpPost} = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register").post(signUpPost);

module.exports = router;