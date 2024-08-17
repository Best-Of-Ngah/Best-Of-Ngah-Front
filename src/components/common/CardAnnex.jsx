import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PALETTE_COLORS } from "../../constant/palette";

function CardAnnex(props) {
  const datas = props.data;
  return (
    <>
      <Grid
        container
        minHeight={"30vh"}
        maxHeight={"30vh"}
        minWidth={"14vw"}
        maxWidth={"14vw"}
        alignContent={"flex-start"}
        boxShadow={"0  0  10px"}
        mb={2}
        borderRadius={3}
        overflow={"hidden"}
      >
        <Grid
          maxHeight={"23vh"}
          minHeight={"23vh"}
          justifyContent={"center"}
          alignContent={"center"}
          overflow={"hidden"}
          position={"relative"}
        >
          <img src={datas.image} alt=""/>

          <Grid
            position={"absolute"}
            top={20}
            color={PALETTE_COLORS.second}
            zIndex={999}
            left={0}
          >
            <Grid px={1} bgcolor={PALETTE_COLORS.second}>
              <Typography variant="body2" fontWeight={"bold"} color={"white"}>
                {datas.budget}
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              "position": "absolute",
              "top": 0,
              "left": 0,
              "width": "100%",
              "height": "100%",
              "backgroundColor": "rgba(0, 0, 0, 0.5)",
              "opacity": 0,
              "transition": "opacity 0.3s ease",
              "&:hover": {
                opacity: 1,
              },
              "display": "flex",
              "justifyContent": "center",
              "alignItems": "center",
            }}
          >
            <Link to={`/${datas.id}`}>
              <Button
                variant="text"
                sx={{ border: "orange 2px solid", color: "orange" }}
              >
                Hijery
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid container pt={1} pl={1} direction={"column"}>
          <Typography
            color={PALETTE_COLORS.second}
            variant="h6"
            fontFamily={"revert-layer"}
            fontWeight={"bold"}
          >
            {datas.description}
          </Typography>
          
        </Grid>
      </Grid>
    </>
  );
}

export default CardAnnex;
