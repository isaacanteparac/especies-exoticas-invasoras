const express = require("express");
const router = express.Router();


const {
  deleteIdUser,
  getUser,
  getIdUser,
} = require("../../controllers/register_user/register_user.controller");

const {verifyUser, createUser} = require("../../controllers/register_user/auth_user");

router.route("/").get(getUser);

router.route("/").post(createUser);

router.route("/:id").delete(deleteIdUser);

router.route("/:id").get(getIdUser);

router.route("/verify-user").post(verifyUser);

module.exports = router;
