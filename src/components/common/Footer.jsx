import { Grid, Link, Stack, Typography } from "@mui/material";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { PALETTE_COLORS } from "../../constant/palette";

function Footer() {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `linear-gradient(120deg, ${PALETTE_COLORS.main} 20%, ${PALETTE_COLORS.second} 80%)`,
        }}
        justifyContent={"center"}
      >
        <Grid
          container
          py={5}
          justifyContent={"space-around"}
          alignItems={"flex-start"}
        >
          <Stack spacing={1.5}>
            <Typography variant="h6" color="textPrimary">
              <InfoIcon fontSize="small" /> INFORMEZ-VOUS
            </Typography>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Iza moa izahay
            </Link>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Fangatahana fiaraha-miasa
            </Link>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Politique de Confidentialité
            </Link>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" color="textPrimary">
              <AssignmentIcon fontSize="small" /> TSARA HO FANTATRA
            </Typography>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Quantifier mon surface à carreler
            </Link>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Fepetra ankapobeny momba ny varotra
            </Link>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" color="textPrimary">
              <HomeRepairServiceIcon fontSize="small" /> TOLOTRA
            </Typography>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Ekipa teknika
            </Link>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Fanarenana ankapobeny
            </Link>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="h6" color="textPrimary">
              <ContactsIcon fontSize="small" /> FIFANDRAISANA
            </Typography>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; lowes@gmail.com
            </Link>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Telma: 034 xx xxx xx
            </Link>
            <Link
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": {
                  color: PALETTE_COLORS.white,
                  textDecoration: "none",
                },
              }}
            >
              &bull; Orange: 032 xx xxx xx
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="body2">© Hackathon 2024</Typography>
      </footer>
    </>
  );
}

export default Footer;
