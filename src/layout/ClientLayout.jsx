import { Outlet } from "react-router";
import { Grid } from "@mui/material";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";

const ClientLayout = () => {
  return (
    <>
      <Grid container alignContent={"flex-start"}>
        <Grid container alignContent={"flex-start"}>
          <Navbar />
        </Grid>
        <Grid container minHeight={"100vh"}>
          <Outlet />
        </Grid>
        <Grid container width={"100%"} overflow={"hidden"}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default ClientLayout;
