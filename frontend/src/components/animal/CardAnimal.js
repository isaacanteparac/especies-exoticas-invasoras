import React, { useState, useEffect, useContext } from "react";
import { styles } from "../styles";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import DeleteIcon from "@mui/icons-material/Delete";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";

import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Comments from "../comments/Comments";
import { AuthContext } from "../../auth/Context";
import { yesToken } from "../../helpers/crud_fetch";
import { Box } from "@mui/system";
import RegsiterAnimal from "./RegisterAnimal";

export default function CardAnimal(props) {
  const { auth } = useContext(AuthContext);
  const { user } = auth;
  const [option, setoption] = useState(null);
  const open = Boolean(option);
  const id_option = open ? "simple-popover" : undefined;
  const [getOption, setGetOption] = useState(false);
  const [openAlert, setOpenAlert] = React.useState({
    open: false,
    text: "",
    icon: "info",
  });

  const imagen = "https://cf.ltkcdn.net/ninos/images/orig/240406-1600x1030-caracol.jpg"

  const viewOption = () => {
    if (props.userId === user.id) {
      setGetOption(true);
    }
  };

  const openOption = (e) => {
    setoption(e.currentTarget);
  };

  const closeOption = () => {
    setoption(null);
  };

  const deleteAnimal = async () => {
    if (getOption) {
      closeOption();
      const urlDelete = "animal/register/" + props.id_animal;
      const resp = await yesToken(urlDelete, "", "DELETE");
      if (resp.ok) {
        setOpenAlert({
          open: true,
          text: "Se elimino correctamente",
          icon: "success",
        });
      } else {
        setOpenAlert({ open: true, text: "Error al eliminar", icon: "error" });
      }
    }
  };

  useEffect(() => {
    viewOption();
  }, []);

  return (
    <Card sx={styles.cardAnimal}>
      <Collapse in={openAlert.open}>
        <Alert
          variant="filled"
          severity={openAlert.icon}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert({
                  open: false,
                  text: openAlert.text,
                  icon: openAlert.icon,
                });
              }}
              sx={{ color: "#fff" }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            mb: 2,
            fontWeight: "600",
            color: "#fff",
            textTransform: "capitalize",
          }}
        >
          {openAlert.text}
        </Alert>
      </Collapse>

      <Box sx={{ margin: "10px 5px" }}>
        <Avatar sx={{ bgcolor: red[500], float: "left" }} aria-label="recipe">
          I
        </Avatar>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            float: "left",
            margin: "0 10px",
          }}
        >
          <Typography component="div" variant="h6">
            {props.name} {props.lastname}
          </Typography>

          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
          >
            {props.username}
          </Typography>
        </Box>

        {getOption ? (
          <IconButton
            onClick={openOption}
            sx={{ position: "relative", left: "60%", bottom: "5px" }}
          >
            <MoreVertIcon />
          </IconButton>
        ) : null}
      </Box>

      <Popover
        id={id_option}
        open={open}
        anchorEl={option}
        onClose={closeOption}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List component="nav" sx={styles.options}>
          <RegsiterAnimal
            btnRegister={false}
            btnEdit={true}
            nameAnimal={props.nameAnimal}
            location={props.location}
            description={props.description}
            id_ctlg_type_specie = {props.id_ctlg_type_specie}
            id_ctlg_scientific_name = {props.id_ctlg_scientic_name}
            id_ctlg_danger_level = {props.id_ctlg_danger_level}
            id_animal = {props.id_animal}
          />

          <ListItemButton sx={styles.contentOptionsBtn} onClick={deleteAnimal}>
            <DeleteIcon sx={styles.iconsOptions} />
            <ListItemText primary="Eliminar" sx={styles.textOptionsItems} />
          </ListItemButton>
        </List>
      </Popover>

      <CardMedia component="img" sx={styles.imagenCardAnimal} image={imagen} />
      <CardContent sx={{ maxheight: "200px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.nameAnimal}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {props.typeSpecie} ({props.scientificName})
        </Typography>
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
