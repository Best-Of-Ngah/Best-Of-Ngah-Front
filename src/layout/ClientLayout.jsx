import { Outlet } from "react-router";
import { Button, Grid } from "@mui/material";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import { PALETTE_COLORS } from "../constant/palette.js";
import { useState } from "react";
import ModalApp from "../components/common/modal/ModalAppoint.jsx";

const ClientLayout = () => {
  const [open, setOpen] = useState(false);
  const [,setAuth] = useState(false);
  return (
    <>
      <ModalApp open={open} setOpen={setOpen} />
      <Grid container alignContent={"flex-start"}>
        <Grid
          container
          position={"fixed"}
          top={"20vh"}
          zIndex={999}
          left={"97vw"}
          width={"2vw"}
          overflow={"hidden"}
          justifyContent={"center"}
          borderRadius={" 9px 0 0 9px "}
          bgcolor={PALETTE_COLORS.main}
          sx={{ opacity: 0.7 }}
        >
          <Button
            variant="texte"
            size="small"
            sx={{ fontWeight: "bold", color: "white" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            H <br /> a<br />n<br />o<br />m<br />e <br /> <br /> f<br />a
            <br />n
            <br />a
            <br />m<br />p<br />i<br />a<br />n<br />a
          </Button>
        </Grid>
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
