import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import CardSearch from "./CardSearch";
import Grid from "@mui/material/Grid";

import { styles } from "../styles";
import { yesToken } from "../../helpers/crud_fetch";

import Zoom from '@mui/material/Zoom';

export default function Search(props) {
  const [chipsSuggestions, setChipsSuggestions] = useState([]);
  const [searchContent, setSearchContent] = useState([]);
  const [idChip, setIdChip] = useState(0);
 

  const addChips = async () => {
    const chipData = await yesToken(props.urlChip);
    setChipsSuggestions(chipData);
  };

  const content = async () => {
    const idUrl = props.url + idChip;
    const data = await yesToken(idUrl);
    setSearchContent(data);
  };

  useEffect(() => {
    addChips();
    content();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <Box sx={{ marginBottom: "15px", height: "110px" }}>
        <Typography
          variant="h5"
          sx={{
            textTransform: "capitalize",
            color: "#0ed671",
            fontWeight: "600",
          }}
        >
          {props.title}
        </Typography>
        <Box
          sx={{
            marginTop: "10px",
            widht: "100%",
            height: "58px",
            overflowX: "scroll",
          }}
        >
          {chipsSuggestions?.map((chip) => (
            <Chip
              key={chip.id}
              value={chip.id}
              label={chip.name}
              sx={styles.chipSearch}
              onClick={() => {
                setIdChip(chip.id);
                addChips();
                content();
              }}
            />
          ))}
        </Box>
      </Box>
      <Grid container spacing={2}>
        {searchContent?.map((animal) => (
            <CardSearch
              key={animal.id}
              animalName={animal.nameAnimal}
              scientificName={animal.scientificName}
              typeSpecie={animal.typeSpecie}
              location={animal.location}
              username={animal.username}
              nameUser={animal.name}
              lastName={animal.lastname}
              id_animal={animal.id}
              description={animal.description}
            />
          
        ))}
      </Grid>
    </Box>
  );
}
