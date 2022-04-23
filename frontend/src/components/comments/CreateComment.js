import React, { useContext, useState, useEffect } from "react";

import UserComment from "./UserComment";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import { styles } from "../styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { AuthContext } from "../../auth/Context";
import { yesToken } from "../../helpers/crud_fetch";

export default function CreateComment(props) {
  const { auth } = useContext(AuthContext);
  const { user } = auth;
  const [comment, setComment] = useState("");
  const [id_users, setId_users] = useState("");
  const [id_animal, setId_animal] = useState("");
  const [allComments, setAllComments] = useState([]);

  const data = {
    comment,
    id_users,
    id_animal,
  };

  const addComment = async () => {
    await yesToken("comment", data, "POST");
    setComment("");
    getAllComments();
  };

  const getAllComments = async () => {
    const getIdAnimal = (await "comment/animal/") + props.id_animal;
    const dataAllComment = await yesToken(getIdAnimal);
    setAllComments(dataAllComment);
  };

  useEffect(() => {
    setId_users(user.id);
    setId_animal(props.id_animal);
    getAllComments();
  },[]);

  return (
    <Box sx={styles.boxComment}>
      <Typography gutterBottom variant="h6">
        Comentarios
      </Typography>

      <Box sx={styles.boxContentComment}>
        {allComments?.map((comment_) => (
          <UserComment
            key={comment_.commentId}
            comment_user={comment_.comment}
            username={comment_.username}
            commentId = {comment_.commentId}
            userId = {comment_.userId}
            animalId = {comment_.id_animal}
          />
        ))}
      </Box>

      <Box sx={{marginTop:"15px", padding:"0 5px"}}>
        <Input
          placeholder="Comenta"
          name="comment"
          id="comment"
          type="text"
          autoComplete="off"
          disableUnderline={true}
          value={comment}
          sx={styles.addCommentInput}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <IconButton sx={styles.buttonAddCommment} onClick={addComment}>
          <SendIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
