import React, { useState } from "react";

import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";

import { styles } from "../styles";

const searchSuggestion = [
  { id: 1, name: "ubication" },
  { id: 2, name: "nombre cientifico" },
  { id: 3, name: "tipo de especie" },
  { id: 4, name: "tipo de peligrosidad" }
];

export default function Search() {
  const [search, setSearch] = useState("busca...");
  const [option, setoption] = useState(null);
  const open = Boolean(option);
  const id_option = open ? "simple-popover" : undefined;

  const openOption = (e) => {
    setoption(e.currentTarget);
  };

  const closeOption = () => {
    setoption(null);
  };

  return (
    <Box sx={styles.boxSearch}>
      <Button sx={styles.btnSearch} variant="contained" onClick={openOption}>
        <SearchIcon sx={styles.iconSearch} />
        {search}
      </Button>
      <Popover
        id={id_option}
        open={open}
        anchorEl={option}
        onClose={closeOption}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List component="nav" sx={{ padding: "5px", width: "270px", background:"#000" }}>
          {searchSuggestion?.map((suggestion) => (
            <ListItemButton
              sx={styles.contentOptionsBtn}
              key={suggestion.id}
              value={suggestion.id}
              onClick={()=>{setSearch(suggestion.name); closeOption();}}
            >
              <ListItemText primary={suggestion.name} sx={styles.textOptionsItems}/>
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </Box>
  );
}
