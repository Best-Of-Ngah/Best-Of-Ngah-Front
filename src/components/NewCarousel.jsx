import { LinkOutlined } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import bgImg from "../assets/images/BgAcceuil1.png";

const datas = [
  {
    id: 1,
    title: "Hehe",
    image: { bgImg },
  },
  {
    id: 2,
    title: "haha",
    image: { bgImg },
  },
  {
    id: 3,
    title: "hpho",
    image: { bgImg },
  },
];

function NewCarousel() {
  return (
    <>
      <Grid item xs={12}>
        <Box
          // key={item.id}
          className="preBuildDashBoard-slider"
          sx={{
            "direction": "initial",
            ".slider": {
              "height": { xs: "auto" },
              "& .slide:not(.selected)": {
                transformOrigin: "center !important",
              },
            },
          }}
          // border={'red solid 2px'}
        >
          <Carousel
            showArrows
            showThumbs={false}
            showIndicators={false}
            // centerMode={!matchUpSM}
            centerSlidePercentage={50}
            infiniteLoop
            autoFocus
            emulateTouch
            swipeable
            autoPlay
            interval={2000}
          >
            {datas.map((item) => (
              <Box key={item.id} display={"flex"} flexDirection={"column"}>
                <Typography mt={"10px"} variant="h2">
                  {item.title}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                      <LinkOutlined />
                    </IconButton>
                  </a>
                </Typography>
                {/* <Items title={item.id} link="/apps/mail" /> */}
              </Box>
            ))}
          </Carousel>
        </Box>
      </Grid>
    </>
  );
}

export default NewCarousel;
