import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Comments from "../comments/Comments";
import { PowerInputSharp } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardAnimal(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: "90%",
        height: "455px",
        borderRadius: "20px",
        backgroundColor: "#fafafa",
        boxShadow: "5px 5px 5px #999",
      }}
    >
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "600" }}
        >
          {props.nameAnimal}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {props.typeSpecie} ({props.scientificName})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Comments
          id_animal={props.id_animal}
          animalName={props.nameAnimal}
          scientificName={props.scientificName}
          typeSpecie={props.typeSpecie}
          location={props.location}
          description={props.description}
        />
      </CardActions>
    </Card>
  );
}
