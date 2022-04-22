const express = require("express");
const router = express.Router();
const {fileUpload} = require('../../helpers/fileProcessing')

const {
  postRegister,
  deleteIdRegister
} = require("../../controllers/animals/register.controller");


router.route("/").post(postRegister);

router.route("/:id").delete(deleteIdRegister);



module.exports = router;
