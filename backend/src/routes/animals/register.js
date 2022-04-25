const express = require("express");
const router = express.Router();
const {fileUpload} = require('../../helpers/fileProcessing')

const {
  postRegister,
  deleteIdRegister,
  putRegister
} = require("../../controllers/animals/register.controller");



router.route("/").post(postRegister);

router.route("/:id").delete(deleteIdRegister);

router.route("/update/:id").put(putRegister);



module.exports = router;
