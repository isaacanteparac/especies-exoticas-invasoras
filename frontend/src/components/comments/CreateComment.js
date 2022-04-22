import React, { useContext, useState, useEffect } from "react";

import UserComment from "./UserComment";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import { styles } from "../styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { AuthContext } from "../../auth/Context";

export default function CreateComment(props) {
  const { auth } = useContext(AuthContext);
  const { user } = auth;
  const [comment, setComment] = useState("");
  const [id_users, setId_users] = useState("");
  const [id_animal, setId_animal] = useState("");
  const url_add_comment = "http://localhost:6060/i/comment";
  const url_view_comment = "http://localhost:6060/i/comment/user/:idUser";

  const data ={
      comment,
      id_users,
      id_animal
  }

  const addComment = async (e) => {
    console.log(data);
    await fetch(url_add_comment, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    e.preventDefault();
  };

  useEffect(() => {
    setId_users(user.id);
    setId_animal(props.id_animal);
  }, []);

  return (
    <Box sx={styles.boxComment}>
      <Typography gutterBottom variant="h6">
        Comentarios
      </Typography>

      <Box sx={styles.boxContentComment}>
        <UserComment />
      </Box>

      <Box component="form" onSubmit={addComment}>
        <Input
          placeholder="Comenta"
          name="comment"
          id="comment"
          type="text"
          disableUnderline={true}
          value={comment}
          sx={styles.addCommentTextField}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <IconButton type="submit" sx={styles.buttonAddCommment}>
          <SendIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
