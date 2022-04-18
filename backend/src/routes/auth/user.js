const express = require("express");
const router = express.Router();
const {validationToken } = require("../../helpers/token");
const {login, createUser, revalidationToken} = require("../../controllers/auth/user");

router.route("/create").post(createUser);

router.route("/verification-user").post(login);

router.route("/token").get(validationToken, revalidationToken);

module.exports = router;
