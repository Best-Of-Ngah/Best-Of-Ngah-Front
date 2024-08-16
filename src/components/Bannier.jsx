import { Grid, Typography } from "@mui/material";
import bgImg from "../assets/images/BgAcceuil1.png";
import { PALETTE_COLORS } from "../constant/palette";

function Bannier() {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `url(${bgImg})`,
        }}
        minHeight={"100vh"}
      >
        <Grid container sm={7}></Grid>
        <Grid container sm={5} justifyContent={"center"}>
          <Typography
            fontSize={"8vh"}
            fontWeight={"bold"}
            color={PALETTE_COLORS.main}
            mt={35}
            ml={10}
          >
            TONTOLOTSIKA
            <br />
            <span style={{ fontSize: "3vh", color: PALETTE_COLORS.second }}>
              Arovy ny Tontolotsika fa antoky ny taranaka
            </span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Bannier;
