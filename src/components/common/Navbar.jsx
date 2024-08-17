import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { LocalFlorist } from "@mui/icons-material";
import { PALETTE_COLORS } from "../../constant/palette";
import ModalApp from "./modal/ModalApp";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleAcceuil = () => {
    navigate("/");
  };
  const handleProduct = () => {
    navigate("/project");
  };
  return (
    <>
      <ModalApp open={open} setOpen={setOpen} />
      <Grid
        borderTop={`${PALETTE_COLORS.main} solid 4px`}
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor="white"
        boxShadow={3}
        px={5}
        style={{
          //   position: 'fixed',
          zIndex: 999,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          <Stack
            direction={"row"}
            mr={6}
            justifyContent={"center"}
            alignItems={"center"}
            border={`${PALETTE_COLORS.main} 2px solid`}
            py={0.5}
            px={3}
            my={1}
            borderRadius={2}
          >
            {
              <LocalFlorist
                sx={{ fontSize: "5vh", color: PALETTE_COLORS.main }}
              />
            }
            <Typography
              variant="h4"
              color={PALETTE_COLORS.main}
              fontFamily={"monospace "}
              fontWeight={"bold"}
              style={{ fontStyle: "italic" }}
            >
              TONTOLOTSIKA
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} mb={2} alignItems={"flex-end"}>
          <Box
            sx={{
              borderBottom:
                location.pathname === "/"
                  ? `3px solid ${PALETTE_COLORS.main} `
                  : "none",
            }}
          >
            <Button
              fontFamily={"monospace"}
              fontWeight={"bold"}
              onClick={handleAcceuil}
              variant="text"
              color="success"
              style={{
                color: PALETTE_COLORS.main,
              }}
            >
              Fandrainsana
            </Button>
          </Box>
          <>
            <Box
              sx={{
                borderBottom:
                  location.pathname === "/project"
                    ? `3px solid ${PALETTE_COLORS.main}`
                    : "none",
              }}
            >
              <Button
                fontFamily={"monospace"}
                fontWeight={"bold"}
                onClick={handleProduct}
                variant="text"
                style={{
                  color: PALETTE_COLORS.main,
                }}
              >
                Tetikasa
              </Button>
            </Box>
          </>

          <Box
            sx={{
              borderBottom:
                location.pathname === "/cours"
                  ? `3px solid ${PALETTE_COLORS.main}`
                  : "none",
            }}
          >
            <Button
              fontFamily={"monospace"}
              fontWeight={"bold"}
              variant="text"
              sx={{
                color: PALETTE_COLORS.main,
              }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Hifandray aminay
            </Button>
          </Box>
        </Stack>
        <Stack direction="row" spacing={5} alignItems={"center"}>
          <Grid bgcolor={"white"} borderRadius={2}>
            <Link to={`/connexion`}>
              <Button
                fontFamily={"monospace"}
                fontWeight={"bold"}
                sx={{ color: PALETTE_COLORS.main, boxShadow: 5 }}
                variant="text"
                startIcon={<PersonIcon />}
              >
                Anangana Tetikasa
              </Button>
            </Link>
          </Grid>
          <Grid bgcolor={"white"} borderRadius={2}>
            <Link to={`/connexion`}>
              <Button
                fontFamily={"monospace"}
                fontWeight={"bold"}
                sx={{ color: PALETTE_COLORS.main, boxShadow: 5 }}
                variant="text"
                startIcon={<PersonIcon />}
              >
                Hiditra
              </Button>
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
}

export default Navbar;
