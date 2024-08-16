import { Grid } from "@mui/material";
import Bannier from "../../../components/Bannier.jsx";
import Descrit from "../../../components/Descrit.jsx";
import Carousel from "../../../components/Carousel.jsx";
import FinalProject from "../../../components/FinalProject.jsx";

// const Slide = ({ number }) => (
//   <div>
//     <img src={`https://via.placeholder.com/328x164.png?text=Slide ${number}`} />
//   </div>
// );

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
