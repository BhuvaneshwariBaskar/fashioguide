const express = require("express");
const { signUpPost, login} = require("../controllers/auth.controller");


const router = express.Router();

router.route("/register").post(signUpPost);
router.route("/login").post(login);

module.exports = router;