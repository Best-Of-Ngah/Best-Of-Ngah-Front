import { Grid, Typography } from "@mui/material";
import bgImg from "../assets/images/BgAcceuil1.png";
function Descrit() {
  return (
    <>
      <Grid container>
        <Grid container item sm={5}>
          <Typography variant="h1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            consequatur veritatis ea labore itaque, ullam quis eaque voluptate.
            Eaque ipsa similique vero quod ea suscipit dolorum quia, fuga
            dolorem ipsam.
          </Typography>
        </Grid>
        <Grid container item sm={6} overflow={"hidden"}>
          <Grid container>
            <img src={bgImg} alt="desc" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Descrit;
