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


//TITLE:ICONS
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

//TITLE:COMPONETS
import ContentComponent from "./ContentComponent";
import { styles } from "../styles";
import User from "../user/User";
import RegisterAnimal from "../animal/RegisterAnimal";
import Logo from "./Logo";
import Search from "../home/Search";
import { Input } from "@mui/material";

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

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [nameOptions, setNameOptions] = useState("Home");

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
              backgroundColor: "#D5DEE7",
              borderTopLeftRadius: "30px",
            }}
          >
            <IconButton
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
            </IconButton>

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
              }}
            >
              <Logo /> Natilus Zone
            </Typography>
            <Search/>
            <RegisterAnimal />
            <User />
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
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
            </Typography>*/}
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
              onClick={() => setNameOptions("Home")}
            >
              <ListItemIcon>
                <HomeIcon sx={styles.iconItems} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={styles.iconItemsListItemText} />
            </ListItemButton>

            <ListItemButton
              sx={styles.iconItemsListItemButton}
              onClick={() => setNameOptions("Perfil")}
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
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: "#D5DEE7",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            borderBottomLeftRadius: "30px",
          }}
        >
          <Toolbar />
          <ContentComponent />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Navigation() {
  return <DashboardContent />;
}
