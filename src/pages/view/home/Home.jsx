import { Grid } from "@mui/material";
import Bannier from "../../../components/Bannier.jsx";
import Descrit from "../../../components/Descrit.jsx";
import FinalProject from "../../../components/FinalProject.jsx";

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
      </Grid>
    </>
  );
};

export default Home;