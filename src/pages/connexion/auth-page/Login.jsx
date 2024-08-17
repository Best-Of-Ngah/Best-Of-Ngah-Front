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
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import bgImg from "../../../assets/images/BgAcceuil1.png";
import loginBg from "../../../assets/images/descit.jpg";
import { makeStyles } from "@mui/styles";
import { PALETTE_COLORS } from "../../../constant/palette";
import { Link } from "react-router-dom";
import GoogleAuth from "../../../components/common/GoogleAuth";
const useStyles = makeStyles({
  textField: {
    // width: "100%",
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
  firstName: yup
    .string("Veuillez entrer votre nom")
    .required("Le nom est obligatoire"),
  lastName: yup
    .string("Veuillez entrer votre nprénom")
    .required("Le prénom est obligatoire"),
  netMonthlySalary: yup
    .number("Veuillez entrer votre salaire mensuelle")
    .required("La salaire mensuelle est obligatoire"),
  dateDeN: yup
    .date("Format de date invalide")
    .required("La date de naissance est obligatoire"),
  email: yup
    .string("Veuillez entrer votre adresse e-mail")
    .email("Veuillez entrer une adresse e-mail valide")
    .required(`'L'adresse e-mail est obligatoire'`),
  password: yup
    .string("Veuillez entrer votre mot de passe")
    .min(4, "Le mot de passe doit contenir au moins 8 caractères")
    .required("Le mot de passe est obligatoire"),
  ConfirmPassword: yup
    .string("Veuillez confirmer votre mot de passe")
    .oneOf(
      [yup.ref("password"), null],
      "Les mots de passe doivent correspondre"
    )
    .required("Veuillez confirmer votre mot de passe"),
});
function Login() {
  const auth = "useAuthTemp()";
  const [isChecked, setIsChecked] = useState(false);
  const classes = useStyles();

  const submitFormData = async (values) => {
    console.log("Submitting form data model");
    const formData = new FormData();

    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("netMonthlySalary", values.netMonthlySalary);
    formData.append("birthday", values.dateDeN);
    formData.append("email", values.email);
    formData.append("password", values.password);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    console.log(JSON.stringify(object));

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "accounts/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log("anaty try");
        console.log(response);
        auth.loginUserFront(response.data);
      })
      .catch((error) => {
        console.log("anaty catch");
        console.error(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      email: "",
      dateDeN: "",
      netMonthlySalary: "",
      password: "",
      ConfirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      submitFormData(values);
    },
  });

  return (
    <>
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          minHeight: "99vh",
          fontFamily: "Jost, sans-serif",
          backgroundImage: isChecked ? `url(${loginBg})` : `url(${bgImg})`,
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
            checked={isChecked}
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
              Login
            </label>
            <form onSubmit={formik.handleSubmit}>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                my={2.5}
                style={{
                  opacity: !isChecked ? 1 : 0,
                  transition: ".8s ease-in-out",
                }}
              >
                <Box borderRadius={1} width={"70%"}>
                  <TextField
                    label="Email"
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
                  opacity: !isChecked ? 1 : 0,
                  transition: ".8s ease-in-out",
                }}
              >
                <Box borderRadius={1} width={"70%"} position={"relative"}>
                  <TextField
                    label="Mot de passe"
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
                              <IconButton>
                                <Visibility fontSize="small" />
                              </IconButton>
                            ) : (
                              <IconButton>
                                <VisibilityOff fontSize="small" />
                              </IconButton>
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
                  // fontSize: "1em",
                  fontWeight: "bold",
                  marginTop: 20,
                  // outline: "none",
                  border: "none",
                  borderRadius: 5,
                  transition: ".2s ease-in",
                  // cursor: "pointer",
                }}
              >
                Submit
              </Button>
            </form>
            <Grid container justifyContent={"center"} my={2}>
              <GoogleAuth setUser={setUser}/>
            </Grid>
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
