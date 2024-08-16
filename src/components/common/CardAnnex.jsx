import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PALETTE_COLORS } from "../../constant/palette";

function CardAnnex(props) {
  const datas = props.data;
  return (
    <>
      <Grid
        container
        minHeight={"36vh"}
        maxHeight={"36vh"}
        minWidth={"14vw"}
        maxWidth={"14vw"}
        alignContent={"flex-start"}
        boxShadow={"0  0  10px"}
        mb={2}
        borderRadius={3}
        overflow={'hidden'}
      >
        <Grid
          maxHeight={"23vh"}
          justifyContent={"center"}
          alignContent={"center"}
          overflow={"hidden"}
          position={"relative"}
        >
            <img src={datas.imgPath} alt="" />

          <Grid
            position={"absolute"}
            top={20}
            color={PALETTE_COLORS.second}
            zIndex={999}
            left={0}
          >
            <Grid px={1} bgcolor={PALETTE_COLORS.second}>
              <Typography variant="body2" fontWeight={"bold"} color={"white"}>
                {datas.id} MGA
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
            <Link href={`${datas.owner}`}>
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
            {datas.owner}
          </Typography>
          <Grid container justifyContent={"left"} mb={1}>
            <Typography variant="body1" fontFamily={"revert"}>
              <span style={{ fontWeight: "bold" }}> Power :</span>150cv
            </Typography>
          </Grid>
          <Grid container justifyContent={"flex-end"} pr={1} mt={-3}>
            <Link href={`${datas.id}`}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  bgcolor: PALETTE_COLORS.second,
                  fontFamily: "revert-layer",
                  fontSize: "small",
                }}
                size="small"
                onClick={() => {
                  // setOpen(true);
                }}
              >
                Hijery
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CardAnnex;
