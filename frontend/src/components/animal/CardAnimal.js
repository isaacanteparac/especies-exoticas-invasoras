import React, { useState, useEffect } from "react";
import { styles } from "../styles";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Box from "@mui/material/Box";

import Comments from "../comments/Comments";

export default function CardAnimal(props) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={styles.cardAnimal}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.username}
      />
      <CardMedia component="img" height="194" image={props.animalPhoto} />
      <CardContent sx={{ height: "136px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.nameAnimal}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {props.typeSpecie} ({props.scientificName})
        </Typography>
        {/*<Box sx={styles.cardBoxDescription}>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
      </Box>*/}

        <Comments
          id_animal={props.id_animal}
          animalName={props.nameAnimal}
          scientificName={props.scientificName}
          typeSpecie={props.typeSpecie}
          location={props.location}
          description={props.description}
          nameUser={props.name}
          lastnameUser={props.lastname}
          usernameUser={props.username}
        />
      </CardContent>
    </Card>
  );
}
