import { Grid, Typography } from "@mui/material";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles CSS d'AOS
import { UrlSite } from "../utils";

function FinalProject() {
  const [load, setLoad] = useState(false);
  const [project, setProject] = useState([]);

  useEffect(() => {
    // Initialisation de AOS
    AOS.init({ duration: 1000 });

    // Requête API pour obtenir les projets
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
      })
      .catch((error) => {
        setLoad(true);
        console.error("tsy mandeha");
        console.error(error);
      });
  }, []);

  if (!load) {
    return <h1>Attend</h1>;
  } else
    return (
      <>
        <Grid container m={5}>
          <Grid container justifyContent={"center"} data-aos="fade-up">
            <Typography variant="h3" fontWeight={"bold"}>
              Tetikasa farany
            </Typography>
          </Grid>
          <Grid container>
            {project.map((item) => (
              <Grid key={item.id} container sm={4} p={2} data-aos="fade-up">
                <Card data={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </>
    );
}

export default FinalProject;
