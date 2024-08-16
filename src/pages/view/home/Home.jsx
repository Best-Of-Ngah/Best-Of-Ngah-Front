import { Grid } from "@mui/material";
import Bannier from "../../../components/Bannier.jsx";
import Descrit from "../../../components/Descrit.jsx";

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
      </Grid>

      {/* <div>
        <Carousel>
          <CarouselItem>
            <Slide number={1} />
          </CarouselItem>
          <CarouselItem>
            <Slide number={2} />
          </CarouselItem>
          <CarouselItem>
            <Slide number={3} />
          </CarouselItem>
          <CarouselItem>
            <Slide number={4} />
          </CarouselItem>
          <CarouselItem>
            <Slide number={5} />
          </CarouselItem>
          <CarouselItem>
            <Slide number={6} />
          </CarouselItem>
          <CarouselItem>
            <Slide number={7} />
          </CarouselItem>
        </Carousel>
      </div> */}
    </>
  );
};

export default Home;
