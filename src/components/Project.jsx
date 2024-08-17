import { Grid, Pagination, Typography } from "@mui/material";
import img from "../assets/images/descit.jpg";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { UrlSite } from "../utils";

function ProjectDetails() {
  const [load, setLoad] = useState(false);
  const [project, setProject] = useState();
  useEffect(() => {
    axios
      .get(
        UrlSite(
          `projects?page=1&size=10&propertyToSortBy=realisationDate&direction=asc`
        )
      )
      .then((response) => {
        setProject(response.data.items);
        setLoad(true);
        console.log(response.data.items);
        console.log("okey azo region");
      })
      .catch((error) => {
        setLoad(true);
        console.error("tsy mandeha");
        console.error(error);
      });
  }, []);
  if (!load) {
    return <h1>attend</h1>;
  } else
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
          <Grid container justifyContent={"center"} px={3}>
            <Typography variant="h3" fontWeight={"bold"}>
              Tetikasa
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          {project.map((item) => (
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
