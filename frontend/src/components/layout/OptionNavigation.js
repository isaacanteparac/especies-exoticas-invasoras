import React from 'react'
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

//TITLE:TAGS
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import WidgetsIcon from "@mui/icons-material/Widgets";

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

export default function OptionNavigation(props){

    return (
        <Drawer variant="permanent" open={porps.open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
            margin: "10px 0",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{
              flexGrow: 1,
              fontSize: "25px",
              fontWeight: "600",
              color: "#0fee7e",
              position: "relative",
              top: "10px",
              left: "30px",
            }}
          >
            Natilus Zone
          </Typography>
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: "relative", top: "10px" }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>

        <Divider />
            <Items/>
      </Drawer>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        </Box>
    )
}
