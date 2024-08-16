import { Grid, Pagination, Typography } from "@mui/material";
import img from "../assets/images/descit.jpg";
import CardAnnex from "./common/CardAnnex";
import TableSpec from "./common/TableSpec";

const test2 = img;
const pojectSpecs = [
  {
    id: 1,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "aujourd hui",
    imgPath: test2,
    owner: "rakoto",
  },
];
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
function ShowProject() {
  return (
    <>
      <Grid container p={2}>
        <Grid container sm={7}>
          <Grid
            container
            sm={7}
            position={"relative"}
            overflow={"hidden"}
            height={"50vh"}
          >
            <img src={img} alt="imag" />
          </Grid>
          <Grid container sm={5} alignContent={"flex-start"} pt={2}>
            <Grid container justifyContent={"center"}>
              <Typography variant="h3" fontWeight={"bold"}>
                Tetikasa
              </Typography>
            </Grid>
            <Grid container p={2}>
              <TableSpec data={pojectSpecs} />
            </Grid>
          </Grid>
          <Grid container>
            <Typography variant="body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              obcaecati non omnis velit iusto quo laboriosam id eveniet pariatur
              veritatis debitis officia maxime sunt amet, aperiam nemo neque
              praesentium possimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ipsum obcaecati non omnis velit iusto quo
              laboriosam id eveniet pariatur veritatis debitis officia maxime
              sunt amet, aperiam nemo neque praesentium possimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ipsum obcaecati non
              omnis velit iusto quo laboriosam id eveniet pariatur veritatis
              debitis officia maxime sunt amet, aperiam nemo neque praesentium
              possimus. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ipsum obcaecati non omnis velit iusto quo laboriosam id
              eveniet pariatur veritatis debitis officia maxime sunt amet,
              aperiam nemo neque praesentium possimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ipsum obcaecati non omnis velit
              iusto quo laboriosam id eveniet pariatur veritatis debitis officia
              maxime sunt amet, aperiam nemo neque praesentium possimus.
            </Typography>
          </Grid>
        </Grid>
        <Grid container sm={5}>
          <Grid
            container
            justifyContent={"space-around"}
            borderLeft={"rgb(0,0,0,0.2) solid 1px"}
            alignContent={"center"}
          >
            <Grid
              container
              justifyContent={"space-evenly"}
              maxHeight={"80vh"}
              sx={{ overflowY: "auto" }}
              pt={2}
            >
              {projects.map((item) => (
                <Grid key={item.id}>
                  <CardAnnex data={item} />
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent={"center"} pt={2}>
              <Pagination count={10} showFirstButton showLastButton />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ShowProject;
