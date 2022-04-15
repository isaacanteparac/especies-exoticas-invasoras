const express = require("express");
const router = express.Router();


const {
  deleteIdUser,
  postUser,
  getUser,
  getIdUser,
  verifyUser
} = require("../../controllers/register_user/register_user.controller");


router.route("/").get(getUser);

router.route("/").post(postUser);

router.route("/:id").delete(deleteIdUser);

router.route("/:id").get(getIdUser);

router.route("/verify-user").post(verifyUser);

module.exports = router;
