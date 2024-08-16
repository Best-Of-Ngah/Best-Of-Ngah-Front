import { Link, Typography, Box, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PALETTE_COLORS } from "../constant/palette";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const Card = (props) => {
  const data = props.data;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: 400,
        height: 400,
        backgroundColor: "white",
        boxShadow: 5,
        borderColor: "gray.200",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Link href="#" underline="none">
        <Grid container height={"35vh"} overflow={'hidden'}>
          <Box
            component="img"
            src={data.imgPath}
            width={"100%"}
            alt="Noteworthy technology acquisitions 2021"
            sx={{
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              overflow: "hidden",
            }}
          />
        </Grid>
      </Link>
      <Box sx={{ p: 2 }}>
        <Link href="#" underline="none">
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: PALETTE_COLORS.main,
              mb: 1,
            }}
          >
            {data.owner}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          sx={{
            color: PALETTE_COLORS.black,
            mb: 2,
          }}
        >
          {data.description}
        </Typography>
        <Grid container justifyContent={"flex-end"}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            href="#"
            sx={{
              "backgroundColor": PALETTE_COLORS.second,
              "&:hover": {
                backgroundColor: PALETTE_COLORS.second,
              },
            }}
            onClick={()=>{navigate("/show")}}
          >
            Hijery
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};
Card.propTypes = {
  data: PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
