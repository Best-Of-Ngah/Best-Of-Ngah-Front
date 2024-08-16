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
          <Stack>
            <Typography variant="h5" color={"back"}>
              <InfoIcon /> INFORMEZ-VOUS
            </Typography>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Qui sommes nous
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Conditions générales de vente
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Pour demande de partenariat
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Politique de Confidentialité
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Achats groupés à zéro intérêt?
            </Link>
          </Stack>
          <Stack>
            <Typography variant="h5" color={"back"}>
              <AssignmentIcon /> BON A SAVOIR
            </Typography>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Quantifier mon surface à carreler
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Conditions générales de vente
            </Link>
          </Stack>
          <Stack>
            <Typography variant="h5" color={"back"}>
              <ContactsIcon />
              RELATION CLIENT
            </Typography>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              lowes@gmail.com
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Telma: 034 xx xxx xx
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Airtel: 033 xx xxx xx
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Orange: 032 xx xxx xx
            </Link>
          </Stack>
          <Stack>
            <Typography variant="h5" color={"back"}>
              <HomeRepairServiceIcon />
              SERVICES
            </Typography>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Equipe technique
            </Link>
            <Link color="inherit" underline="hover">
              <span style={{ marginRight: "4px", fontSize: "12px" }}>
                &bull;
              </span>
              Recouvrementonditions générales
            </Link>
          </Stack>
        </Grid>
      </Grid>
      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "5px 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <p>© Hackathon 2024</p>
      </footer>
    </>
  );
}

export default Footer;
