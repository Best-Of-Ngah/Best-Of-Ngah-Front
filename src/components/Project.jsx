import { Grid, Pagination, TextField, Typography } from "@mui/material";
import img from "../assets/images/descit.jpg";
import Card from "./Card";

const test2 = img;
const projects = [
  {
    id: 1,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "aujourd hui",
    imgPath: test2,
    owner: "rakoto",
  },
  {
    id: 2,
    description: "blablabla okay",
    dateRealisation: "amaray",
    imgPath: test2,
    owner: "rabe",
  },
  {
    id: 3,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "darem",
    imgPath: test2,
    owner: "rabekoto",
  },
  {
    id: 4,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "radem",
    imgPath: test2,
    owner: "kotorabe",
  },
  {
    id: 5,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "aujourd hui",
    imgPath: test2,
    owner: "rakoto",
  },
  {
    id: 6,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "aujourd hui",
    imgPath: test2,
    owner: "rakoto",
  },
];
function ProjectDetails() {
  return (
    <>
      <Grid
        container
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "70vh",
          transition: "background-image 1s ease",
        }}
        overflow={"hidden"}
      >
        <Grid
          container
          minHeight={"100vh"}
          sx={{
            backdropFilter: "blur(0)",
          }}
        ></Grid>
      </Grid>
      <Grid container pt={2} alignContent={"center"}>
        <Grid container sm={6} px={3}>
          <Typography variant="h3" fontWeight={"bold"}>
            Tetikasa
          </Typography>
        </Grid>
        <Grid
          container
          sm={6}
          justifyContent={"space-around"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Grid container sm={6} px={2} justifyContent={"space-around"}>
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              fullWidth
              type="date"
              label="Nanomboka ny"
            />
          </Grid>
          <Grid container sm={6} px={2} justifyContent={"space-around"}>
            <TextField
              size="small"
              InputLabelProps={{ shrink: true }}
              fullWidth
              type="date"
              label="Nifarana ny"
            />{" "}
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        {projects.map((item) => (
          <Grid key={item.id} container sm={4} p={2}>
            <Card data={item} />
          </Grid>
        ))}
      </Grid>

      <Grid container p={3} justifyContent={"center"}>
        <Pagination count={10} showFirstButton showLastButton />
      </Grid>
    </>
  );
}

export default ProjectDetails;
