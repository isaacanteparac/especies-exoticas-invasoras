const express = require("express");
const router = express.Router();

const {verificationUser, createUser, authenticateToken} = require("../../controllers/auth/user");

router.route("/create").post(createUser);

router.route("/verification").post(verificationUser);

router.route("/authentication").get(authenticateToken);

module.exports = router;
