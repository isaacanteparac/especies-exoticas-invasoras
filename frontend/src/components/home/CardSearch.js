import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScienceIcon from "@mui/icons-material/Science";
import PetsIcon from "@mui/icons-material/Pets";

import PersonIcon from "@mui/icons-material/Person";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';


import { styles } from "../styles";
import Comments from "../comments/Comments";
import ViewImagen from "./ViewImagen";
import Zoom from '@mui/material/Zoom';


export default function CardSearch(props) {
  const fullname = props.nameUser + " " + props.lastName;
  const imagen = "https://cf.ltkcdn.net/ninos/images/orig/240406-1600x1030-caracol.jpg"

  return (
    <Zoom in={true}>
    <Card sx={styles.cardSearch}>
      <ViewImagen viewImageSearch={true} image={imagen} animalName={props.animalName}/>
      

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          margin: "10px",
        }}
      >
        <Box>
          <Typography component="div" variant="h5" sx={{color:"#1cc996",  textTransform: "capitalize",fontWeight:"600"}}>
            {props.animalName}
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Nombre cientifico" placement="bottom">
            <Typography component="div" sx={styles.textTypoCard}>
              <ScienceIcon sx={styles.iconItemSearch} />
              {props.scientificName}
            </Typography>
          </Tooltip>

          <Tooltip title="Clasificacion de especie" placement="bottom">
            <Typography component="div" sx={styles.textTypoCard}>
              <PetsIcon sx={styles.iconItemSearch} />
              {props.typeSpecie}
            </Typography>
          </Tooltip>

          <Tooltip title="Ubicacion" placement="bottom">
            <Typography component="div" sx={styles.textTypoCard}>
              <LocationOnIcon sx={styles.iconItemSearch} />
              {props.location}
            </Typography>
          </Tooltip>

          <Tooltip title="Nivel de amenaza" placement="bottom">
            <Typography component="div" sx={styles.textTypoCard}>
              <ReportProblemIcon sx={styles.iconItemSearch} />
              {props.dangerLevel}
            </Typography>
          </Tooltip>

          <Tooltip title={fullname} placement="bottom">
            <Typography component="div" sx={styles.textTypoCard}>
              <PersonIcon sx={styles.iconItemSearch} />
              {props.username}
            </Typography>
          </Tooltip>
        </Box>
        <Divider sx={{margin:"5px 0"}}/>
        <Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ minHeight: "150px" }}
          >
            {props.description}gf
          </Typography>
        </Box>
        <Divider sx={{margin:"5px 0"}}/>
        <Comments
          id_animal={props.id_animal}
          animalName={props.animalName}
          scientificName={props.scientificName}
          typeSpecie={props.typeSpecie}
          location={props.location}
          description={props.description}
          nameUser={props.nameUser}
          lastnameUser={props.lastName}
          usernameUser={props.username}
        />
      </Box>
    </Card>
    </Zoom>
  );
}
