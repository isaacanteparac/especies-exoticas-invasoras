const commentsCtrl = {};

const db = require("../../../database");

commentsCtrl.addComment = async (req, res) => {
  const { comment, id_animal, id_users } = req.body;
  try {
    const newComment = {
      comment,
      id_animal,
      id_users,
    };
    console.log(newComment);
    await db.query("INSERT INTO comments set ?", [newComment]);
    res.status(200).json({ message: true });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

commentsCtrl.deleteComment = async (req, res) => {
  try {
    await db.query("DELETE FROM comments WHERE id = ?", [req.params.id]);
    res.status(200).json({ message: true });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

commentsCtrl.getAllComments = async (req, res) => {
  try {
    const allanimal = await db.query("SELECT * FROM comments");
    res.status(200).json(allanimal);
  } catch (error) {
    res.status(400), json({ message: error });
  }
};

commentsCtrl.getIdCommentAnimal = async (req, res) => {
  try {
    const idanimal = await db.query(
      "SELECT comments.comment, comments.id AS commentId"+
      ",users.id AS userId, users.name, users.lastname, users.username"+
      ",users.photo AS userPhoto FROM (comments INNER JOIN users ON comments.id_users = users.id)"+
      "WHERE id_animal = ?",
      [req.params.id]
    );
    res.status(200).json(idanimal);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

commentsCtrl.getIdCommentUser = async (req, res) => {
  try {
    const iduser = await db.query("SELECT * FROM comments WHERE id_users = ?", [
      req.params.id,
    ]);
    res.status(200).json(iduser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = commentsCtrl;
