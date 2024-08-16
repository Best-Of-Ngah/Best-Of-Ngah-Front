import { Grid } from "@mui/material";
import Bannier from "../../../components/Bannier.jsx";
import Descrit from "../../../components/Descrit.jsx";
import Carousel from "../../../components/Carousel.jsx";
import FinalProject from "../../../components/FinalProject.jsx";
import Donate from "../../../components/modal/Donate.jsx";

const Home = () => {
  return (
    <>
      <Grid container maxWidth={"100%"} alignContent={"initial"}>
        <Grid container>
          <Bannier />
        </Grid>
        <Grid container>
          <Descrit />
        </Grid>
        <Grid container>
          <FinalProject />
        </Grid>
        <Grid>
          <Donate />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
