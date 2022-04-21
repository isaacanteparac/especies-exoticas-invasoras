import React,{useState} from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";



import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import IconButton from "@mui/material/IconButton";
import WidgetsIcon from "@mui/icons-material/Widgets";
import NotificationsIcon from "@mui/icons-material/Notifications";


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

const drawerWidth = 240;


export default function Header() {
  const [open, setOpen] = useState(true);
  const [nameOptions, setNameOptions] = useState("Home");

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <AppBar open={open} color="transparent" sx={{ boxShadow: "0 0 0" }}>
      <Toolbar
        sx={{
          pr: "24px",
          backgroundColor: "#fff",
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
          <WidgetsIcon sx={{ color: "#0fee7e" }} />
        </IconButton>

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
          }}
        >
          {nameOptions}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
