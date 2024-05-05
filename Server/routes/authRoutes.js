const express = require("express");

const Auth = require("../controllers/authControlers");

const router = express.Router();

router.post("/signUp", Auth.signUp);
router.post("/login", Auth.login);

module.exports = router;
