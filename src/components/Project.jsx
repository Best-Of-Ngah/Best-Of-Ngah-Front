import { Grid, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles CSS d'AOS
import img from "../assets/images/descit.jpg";
import Card from "./Card";
import { UrlSite } from "../utils";

function ProjectDetails() {
  const [load, setLoad] = useState(false);
  const [project, setProject] = useState();

  useEffect(() => {
    // Initialisation de AOS
    AOS.init({ duration: 1000 });

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
          data-aos="fade-in" // Animation sur le conteneur principal
        >
          <Grid
            container
            minHeight={"100vh"}
            sx={{
              backdropFilter: "blur(0)",
            }}
          ></Grid>
        </Grid>
        <Grid container pt={2} alignContent={"center"} data-aos="fade-up">
          <Grid container justifyContent={"center"} px={3}>
            <Typography variant="h3" fontWeight={"bold"}>
              Tetikasa
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          {project.map((item) => (
            <Grid key={item.id} container sm={4} p={2} data-aos="zoom-in">
              <Card data={item} />
            </Grid>
          ))}
        </Grid>

        <Grid container p={3} justifyContent={"center"} data-aos="fade-up">
          <Pagination count={10} showFirstButton showLastButton />
        </Grid>
      </>
    );
}

export default ProjectDetails;
