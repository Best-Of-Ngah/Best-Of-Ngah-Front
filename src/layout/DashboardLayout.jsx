import * as React from "react";
import MovingIcon from "@mui/icons-material/Moving";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { PALETTE_COLORS } from "../constant/palette.js";
import { Link, Outlet } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import { Logout, MonetizationOnSharp, Person, Work } from "@mui/icons-material";

const drawerWidth = 240;

export const DashboardLayout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link className="flex flex-row gap-6 px-4 py-5 text-main font-bold">
        <MovingIcon />
        <p>STATISTIQUE</p>
      </Link>

      <Link className="flex flex-row gap-6 px-4 py-5 text-main font-bold">
        <Work />
        <p>PROJECT</p>
      </Link>

      <Link className="flex flex-row gap-6 px-4 py-5 text-main font-bold">
        <Person />
        <p>UTILISATEUR</p>
      </Link>
      <Link className="flex flex-row gap-6 px-4 py-5 text-main font-bold">
        <MonetizationOnSharp />
        <p>DONS</p>
      </Link>
      <Divider />
      <Link className="flex flex-row gap-6 px-4 py-5 text-main font-bold">
        <Logout />
        <p>LOGOUT</p>
      </Link>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: PALETTE_COLORS.white,
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid container item sm={11} alignContent={"center"}>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                color={PALETTE_COLORS.main}
              >
                TONTOLOTSIKA
              </Typography>
            </Grid>
            <Grid container item sm={1} justifyContent={"center"}>
              <Avatar alt="User" sx={{ float: "right" }} src="" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "display": { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            "display": { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid>
          <Outlet />
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
