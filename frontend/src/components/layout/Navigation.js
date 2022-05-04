import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

//TITLE:TAGS
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import SearchIcon from "@mui/icons-material/Search";

import Popover from "@mui/material/Popover";

//TITLE:ICONS

//TITLE:COMPONETS
import ContentComponent from "./ContentComponent";
import { styles } from "../styles";
import User from "../user/User";
import RegisterAnimal from "../animal/RegisterAnimal";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";




const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const searchSuggestion = [
  { id: 1, name: "ubication", urlChip: "" },
  {
    id: 2,
    name: "nombre cientifico",
    urlChip: "ctlg/scientific-name",
    url: "animal/scientific-name/",
  },
  {
    id: 3,
    name: "Clasificacion de especie",
    urlChip: "ctlg/types-specie",
    url: "animal/type-specie/",
  },
  { id: 4, name: "nivel de peligrosidad", urlChip: "ctlg/danger-level" },
];

const mdTheme = createTheme();

function DashboardContent() {
  const [searchInput, setSearchInput] = useState("");
  const [getComponent, setGetComponent] = useState({
    home: true,
    search: false,
  });
  const [search, setSearch] = useState({ id: 0, name: "" });
  const [option, setoption] = useState(null);
  const open_search = Boolean(option);
  const id_option = open_search ? "simple-popover" : undefined;

  const openOption = (e) => {
    setoption(e.currentTarget);
  };

  const closeOption = () => {
    setoption(null);
  };


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", backgroundColor: "#FFFFFF", border: "none" }}>
        <CssBaseline />

        <AppBar
          sx={{ boxShadow: "0 0 0", backgroundColor: "#FFFFFF" }}
        >
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: "30px",
            }}
          >

            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                fontSize: "30px",
                fontWeight: "600",
                color: "#000",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => {
                setSearchInput("");
                setGetComponent({ home: true, search: false });
              }}
            >
              <Logo /> Ibug
            </Typography>

            <Box sx={styles.boxSearch}>
              <SearchIcon sx={styles.iconSearch} />
              <TextField
                variant="standard"
                placeholder="busca..."
                value={searchInput}
                onClick={openOption}
                autoComplete="off"
                onChange={(e) => setSearchInput(e.target.value)}
                sx={{ width: "84%", height: "60px", color: "#fff" }}
              />
              <CloseIcon
                sx={{
                  color: "#999",
                  fontSize: "18px",
                  marginLeft: "1px",
                  position: "relative",
                  bottom: "5px",
                }}
                onClick={() => {
                  setSearchInput("");
                }}
              />

              <Popover
                id={id_option}
                open={open_search}
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
                <List
                  component="nav"
                  sx={{ padding: "5px", width: "310px", background: "#F5f8fb" }}
                >
                  {searchSuggestion?.map((suggestion) => (
                    <ListItemButton
                      sx={styles.searchContentBtn}
                      key={suggestion.id}
                      value={suggestion.id}
                      onClick={() => {
                        setSearchInput(suggestion.name);
                        setSearch(suggestion);
                        setGetComponent({ home: false, search: true });
                        closeOption();
                      }}
                    >
                      <ListItemText
                        primary={suggestion.name}
                        sx={{ textTransform: "capitalize" }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Popover>
            </Box>

            <RegisterAnimal btnRegister={true} btnEdit={false}/>

            <User />
          </Toolbar>
        </AppBar>


        <Box
          component="main"
          sx={styles.mainComponent}
        >
          <Toolbar />

          <ContentComponent
            home={getComponent.home}
            search={getComponent.search}
            titleSearch={search.name}
            urlChip={search.urlChip}
            url={search.url}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Navigation() {
  return <DashboardContent />;
}
