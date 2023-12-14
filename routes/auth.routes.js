const express = require("express");
const { signUpPostPost} = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register").post(signUpPostPost);

module.exports = router;