import { Link, Typography, Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PALETTE_COLORS } from "../constant/palette";

const Card = () => {
  return (
    <Box
      sx={{
        maxWidth: 500,
        height: 400,
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "gray.200",
        borderRadius: 2,
        boxShadow: 1,
        overflow: "hidden",
      }}
    >
      <Link href="#" underline="none">
        <Box
          component="img"
          src="/docs/images/blog/image-1.jpg"
          alt="Noteworthy technology acquisitions 2021"
          sx={{
            width: "100%",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
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
            Noteworthy technology acquisitions 2021
          </Typography>
        </Link>
        <Typography
          variant="body2"
          sx={{
            color: PALETTE_COLORS.black,
            mb: 2,
          }}
        >
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </Typography>
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
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
