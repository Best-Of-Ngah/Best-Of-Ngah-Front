import { Grid, Typography } from "@mui/material";
import Card from "./Card";
import img from "../assets/images/descit.jpg";

const test2 = img

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
function FinalProject() {
  return (
    <>
      <Grid container m={5}>
        <Grid container justifyContent={'center'}>
          <Typography variant="h3" fontWeight={"bold"}>
            Tetikasa farany
          </Typography>
        </Grid>
        <Grid container>
          {projects.map((item) => (
            <Grid key={item.id} container sm={4} p={2}>
              <Card data={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default FinalProject;
