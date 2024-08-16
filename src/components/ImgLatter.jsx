import { Grid } from "@mui/material";
import bgImg from "../assets/images/BgAcceuil1.png";
const ImgNewLetter = () => {
  const urlimage = bgImg;
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        height={{ xs: "30vh", lg: "50vh" }}
        // borderRadius={4}
        //  boxShadow={2}
        // bgcolor={'white'}
      >
        <img
          src={urlimage}
          alt=""
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </Grid>
    </>
  );
};

export default ImgNewLetter;
