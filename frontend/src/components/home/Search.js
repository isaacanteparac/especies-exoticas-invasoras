import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import { styles } from "../styles";
import { yesToken } from "../../helpers/crud_fetch";
import CardSearch from "./CardSearch";

export default function Search(props) {
  const [chipsSuggestions, setChipsSuggestions] = useState([]);
  const [searchContent, setSearchContent] = useState([]);
  const [idChip, setIdChip] = useState(0);

  const addChips = async () =>{
    const chipData = await yesToken(props.urlChip);
    setChipsSuggestions(chipData);

  }

  const content = async () =>{
    const idUrl = props.url + idChip;
    const data = await yesToken(idUrl);
    setSearchContent(data);
  }

  useEffect(() => {
    addChips();
    content();
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <Box>
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
            margin: "10px 0",
            widht:"100%",
            height:"40px",
            overflowX: "scroll",
          }}
        >
          {chipsSuggestions?.map((chip) => (
          <Chip key={chip.id} 
          value={chip.id} 
          label={chip.name} 
          sx={styles.chipSearch} 
          onClick={()=>{setIdChip(chip.id)}}
          />
          ))}
        </Box>
      </Box>
      <Box>
        {searchContent?.map((animal)=>(
          <CardSearch name={animal.name}/>
        ))}
      </Box>
    </Box>
  );
}
