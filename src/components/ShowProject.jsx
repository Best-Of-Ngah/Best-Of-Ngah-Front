import { Grid, Pagination, Typography } from "@mui/material";
import CardAnnex from "./common/CardAnnex";
import TableSpec from "./common/TableSpec";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { UrlSite } from "../utils";

function ShowProject() {
  const {id} = useParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState();
  useEffect(() => {
    axios
      .get(
        UrlSite(
          `projects?page=1&size=10&propertyToSortBy=realisationDate&direction=asc`
        )
      )
      .then((response) => {
        setDatas(response.data.items);
        setLoad(true);
        console.log(response.data.items);
        console.log("okey azo region");
      })
      .catch((error) => {
        setLoad(true);
        console.error("tsy mandeha");
        console.error(error);
      });
  }, [id]);
  useEffect(() => {
    axios
      .get(UrlSite(`projects/${id}`))
      .then((response) => {
        setData(response.data);
        setLoading(true);
        console.log(response.data);
        console.log("okey azo region");
      })
      .catch((error) => {
        setLoading(true);
        console.error("tsy mandeha");
        console.error(error);
      });
  }, [id]);
  if (!load && !loading) {
    return <h1>attend</h1>;
  } else
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
              <img src={data.image} alt="imag" width={'100%'}/>
            </Grid>
            <Grid container sm={5} alignContent={"flex-start"} pt={2}>
              <Grid container justifyContent={"center"}>
                <Typography variant="h3" fontWeight={"bold"}>
                  Tetikasa
                </Typography>
              </Grid>
              <Grid container p={2}>
                <TableSpec data={data} />
              </Grid>
            </Grid>
            <Grid container>
              <Typography variant="body1">
                {data.description}
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
                {datas.map((item) => (
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
