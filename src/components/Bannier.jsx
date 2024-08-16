import { Grid } from "@mui/material";
import bgImg from "../assets/images/BgAcceuil1.png";

function Bannier() {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <h1></h1>
      </Grid>
    </>
  );
}

export default Bannier;
