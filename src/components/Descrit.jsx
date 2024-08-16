import { Grid, Typography } from "@mui/material";
import bgImg from "../assets/images/descit.jpg";
function Descrit() {
  return (
    <>
      <Grid container m={5} boxShadow={5} p={3} borderRadius={3}>
        <Grid container item sm={5}>
          <Grid container justifyContent={'center'}>
            <Typography variant="h4">Ny Tontolontsika dia :</Typography>
          </Grid>
          <Typography textAlign={'c'} variant="caption">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            consequatur veritatis ea labore itaque, ullam quis eaque voluptate.
            Eaque ipsa similique vero quod ea suscipit dolorum quia, fuga
            dolorem ipsam.
          </Typography>
        </Grid>
        <Grid
          container
          item
          sm={7}
          overflow={"hidden"}
          justifyContent={"center"}
          
        >
          <Grid container  justifyContent={"center"}  alignContent={'center'}>
            <img src={bgImg} alt="" style={{ width: "80%", height: "80%" }} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Descrit;
