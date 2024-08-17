import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import bgImg from "../../../assets/images/BgAcceuil1.png";
import { makeStyles } from "@mui/styles";
import { PALETTE_COLORS } from "../../../constant/palette";
import { Link, useNavigate } from "react-router-dom";
import TosteSucces from "../../../components/common/toste/TosteSucces";
import TosteError from "../../../components/common/toste/TosteErro";
import { useLocalStorage } from "../../../utils/useLocalStorage";

export function UrlSite(lien) {
  return "http://localhost:8086" + "/" + lien;
}

const useStyles = makeStyles({
  textField: {
    "& .MuiInputBase-root": {
      height: "5vh",
      fontSize: "0.8rem", // Taille du texte
      padding: 0, // Espacement intérieur
      borderRadius: "4px", // Bordure
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.8rem", // Taille du label
      backgroundColor: "white",
      padding: "0 10px",
      marginLeft: "-5px",
      borderRadius: 4,
      zIndex: 2,
    },
  },
});

const validationSchema = yup.object({
  email: yup
    .string("Veuillez entrer votre adresse e-mail")
    .email("Veuillez entrer une adresse e-mail valide")
    .required("L'adresse e-mail est obligatoire"),
  password: yup
    .string("Veuillez entrer votre mot de passe")
    .min(4, "Le mot de passe doit contenir au moins 8 caractères")
    .required("Le mot de passe est obligatoire"),
});

function Login() {
  const [load, setLoad] = useState(false);
  const [openSucces, setOpenSucces] = useState(false);
  const [openError, setOpenError] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const {setValue, value} = useLocalStorage('token');

  const submitFormData = async (values) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: UrlSite("sign-in"),
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: values.email,
        password: values.password,
      },
    };

    await axios
      .request(config)
      .then((response) => {
        setValue(response.data);
         console.log(value);
        setOpenSucces(true);
        setLoad(true)
        
      })
      .catch((error) => {
        console.log(error);
        setOpenError(true);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      showPassword: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitFormData(values);
    },
  });
  if (load) {
    navigate("/");
  }
  return (
    <>
      <TosteSucces
        message={"Success"}
        setOpen={setOpenSucces}
        open={openSucces}
      />
      <TosteError
        message={"Try again"}
        setOpen={setOpenError}
        open={openError}
      />
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          minHeight: "99vh",
          fontFamily: "Jost, sans-serif",
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          transition: " .8s ease-in-out",
          overflow: "hidden",
          width: "99vw",
        }}
      >
        <div
          style={{
            width: 350,
            overflow: "hidden",
            borderRadius: 10,
            boxShadow: "5px 20px 50px #000",
            transition: "height .8s ease-in-out",
            backgroundColor: "white",
            border: `${PALETTE_COLORS.main} solid 4px`,
            marginRight: "18vw",
            padding: "5vh 0",
          }}
        >
          <input
            type="checkbox"
            id="chk"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <div
            className="signup"
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            <label
              htmlFor="chk"
              aria-hidden="true"
              style={{
                color: PALETTE_COLORS.main,
                fontSize: "2.3em",
                justifyContent: "center",
                display: "flex",
                margin: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: ".5s ease-in-out",
              }}
            >
              Fidirana
            </label>
            <form onSubmit={formik.handleSubmit}>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                my={2.5}
                style={{
                  transition: ".8s ease-in-out",
                }}
              >
                <Box borderRadius={1} width={"70%"}>
                  <TextField
                    label="Mailaka"
                    className={classes.textField}
                    variant="outlined"
                    color="secondary"
                    sx={{ bgcolor: "white", borderRadius: 1, zIndex: 0 }}
                    size="small"
                    fullWidth
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                my={2.5}
                style={{
                  transition: ".8s ease-in-out",
                }}
              >
                <Box borderRadius={1} width={"70%"} position={"relative"}>
                  <TextField
                    label="Teny miafina"
                    className={classes.textField}
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    sx={{ bgcolor: "white", borderRadius: 1, zIndex: 0 }}
                    size="small"
                    id="password"
                    name="password"
                    type={formik.values.showPassword ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              formik.setValues({
                                ...formik.values,
                                showPassword: !formik.values.showPassword,
                              })
                            }
                            edge="end"
                          >
                            {formik.values.showPassword ? (
                              <Visibility fontSize="small" />
                            ) : (
                              <VisibilityOff fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Grid>
              <Button
                type="submit"
                style={{
                  width: "60%",
                  height: 40,
                  margin: "10px auto",
                  justifyContent: "center",
                  display: "block",
                  color: "#fff",
                  background: PALETTE_COLORS.main,
                  fontWeight: "bold",
                  marginTop: 20,
                  border: "none",
                  borderRadius: 5,
                  transition: ".2s ease-in",
                }}
              >
                Handefa
              </Button>
            </form>
            <Grid container justifyContent={"center"}>
              <Link to={"/connexion"}>
                <Typography
                  color={PALETTE_COLORS.second}
                  sx={{ textDecoration: "underline" }}
                  variant="body2"
                  fontWeight={"bold"}
                >
                  Hanokatra kanonty
                </Typography>
              </Link>
            </Grid>
            <Grid container justifyContent={"center"}>
              <Link to={"/"}>
                <Typography
                  color={PALETTE_COLORS.second}
                  sx={{ textDecoration: "underline" }}
                  variant="body2"
                >
                  Hiverina
                </Typography>
              </Link>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
