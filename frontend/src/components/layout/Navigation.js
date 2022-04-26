import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

//TITLE:TAGS
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import Popover from "@mui/material/Popover";

//TITLE:ICONS
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

//TITLE:COMPONETS
import ContentComponent from "./ContentComponent";
import { styles } from "../styles";
import User from "../user/User";
import RegisterAnimal from "../animal/RegisterAnimal";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";



const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      border: "none",
    }),
    border: "none",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    color: "#000",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
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
  const [open, setOpen] = useState(false);
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

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", backgroundColor: "#fff", border: "none" }}>
        <CssBaseline />

        <AppBar
          open={open}
          sx={{ boxShadow: "0 0 0", backgroundColor: "#fff" }}
        >
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "#fff",
              borderTopLeftRadius: "30px",
            }}
          >
            {/*<IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>*/}

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
              <Logo /> Inatilus
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

        {/*<Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              margin: "10px 0",
            }}
          >
            {/*<Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                fontSize: "25px",
                fontWeight: "600",
                color: "#000",
                position: "relative",
                top: "10px",
              }}
            >
              <Logo /> Natilus Zone
            </Typography>


            <IconButton
              onClick={toggleDrawer}
              sx={{ position: "relative", top: "10px", left: "10px" }}
            >
              <MenuOpenIcon sx={{ color: "#000" }} />
            </IconButton>
          </Toolbar>

          <List component="nav" sx={{ padding: "0 5px" }}>
            <ListItemButton
              sx={styles.iconItemsListItemButton}
              
            >
              <ListItemIcon>
                <HomeIcon sx={styles.iconItems} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={styles.iconItemsListItemText} />
            </ListItemButton>

            <ListItemButton
              sx={styles.iconItemsListItemButton}
              
            >
              <ListItemIcon>
                <PersonIcon sx={styles.iconItems} />
              </ListItemIcon>
              <ListItemText
                primary="Perfil"
                sx={styles.iconItemsListItemText}
              />
            </ListItemButton>
          </List>
        </Drawer>*/}

        <Box
          component="main"
          sx={{
            backgroundColor: "#fff",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            borderBottomLeftRadius: "30px",
          }}
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
