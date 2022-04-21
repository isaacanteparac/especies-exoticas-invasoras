const express = require("express");
const router = express.Router();

const {
addComment,
deleteComment,
getAllComments,
getIdCommentAnimal,
getIdCommentUser
} = require("../../controllers/animals/comments.controller");

router.route("/").post(addComment);

router.route("/:id").delete(deleteComment);

router.route("/all").get(getAllComments);

router.route("/animal/:idAnimal").get(getIdCommentAnimal);

router.route("/user/:idUser").get(getIdCommentUser);

module.exports = router;
