import React, { Component } from "react";


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScienceIcon from "@mui/icons-material/Science";
import PetsIcon from "@mui/icons-material/Pets";
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';

import {styles} from "../styles";

export default function CardSearch(props) {
  const fullname = props.nameUser+" "+props.lastName
  const imagen = "https://media.vogue.mx/photos/6243293341ab39375529a6a1/2:3/w_1600,c_limit/Billie-Eilish-botas-go%CC%81ticas-oscars-2022.jpg";

  return (
    <Card sx={styles.cardSearch}>
      <Box sx={styles.boxImagenSearch}>
        <CardMedia
            component="img"
            sx={{ width: "100%", borderRadius:"10px", maxHeight:"200px" }}
            image={imagen}
          />
      </Box>
      
      <Box sx={{ display: "flex", flexDirection: "column",width:"60%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5"sx={styles.textTypoCard}>
            {props.name}
          </Typography>
          <Tooltip title="Nombre cientifico" placement="bottom">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={styles.textTypoCard}
            >
              <ScienceIcon sx={styles.iconItemSearch}/>
              {props.scientificName}
            </Typography>
          </Tooltip>

          <Tooltip title="Clasificacion de especie" placement="bottom">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            sx={styles.textTypoCard}
            >
              <PetsIcon sx={styles.iconItemSearch}/>
              {props.typeSpecie}
            </Typography>
          </Tooltip>

          <Tooltip title="Ubicacion" placement="bottom">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            sx={styles.textTypoCard}
            >
              <LocationOnIcon sx={styles.iconItemSearch}/>
              {props.location}
            </Typography>
          </Tooltip>

          <Tooltip title="Nivel de amenaza" placement="bottom">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            sx={styles.textTypoCard}
            >
              <BarChartIcon sx={styles.iconItemSearch}/>
              {props.dangerLevel}
            </Typography>
          </Tooltip>

          <Tooltip title={fullname} placement="bottom">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            sx={styles.textTypoCard}
            >
              <PersonIcon sx={styles.iconItemSearch}/>
              {props.username}
            </Typography>
          </Tooltip>

        </CardContent>
      </Box>
      
    </Card>
  );
}
