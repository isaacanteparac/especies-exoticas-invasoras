const express = require("express");
const router = express.Router();

const {
addComment,
deleteComment,
getAllComments,
getIdCommentAnimal,
getIdCommentUser,
putIdCommentUser
} = require("../../controllers/animals/comments.controller");

router.route("/").post(addComment);

router.route("/:id").delete(deleteComment);

router.route("/all").get(getAllComments);

router.route("/animal/:id").get(getIdCommentAnimal);

router.route("/user/:id").get(getIdCommentUser);

router.route("/update/:id").put(putIdCommentUser)

module.exports = router;
