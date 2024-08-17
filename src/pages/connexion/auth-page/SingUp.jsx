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
import { Backup, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import bgImg from "../../../assets/images/BgAcceuil1.png";
import loginBg from "../../../assets/images/descit.jpg";
import { makeStyles, styled } from "@mui/styles";
import { PALETTE_COLORS } from "../../../constant/palette";
import { Link, useNavigate } from "react-router-dom";
import { UrlSite } from "../../../utils";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import TosteSucces from "../../../components/common/toste/TosteSucces";
import TosteError from "../../../components/common/toste/TosteErro";
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
function SingUp3() {
  const [openSucces, setOpenSucces] = useState(false);
  const [openError, setOpenError] = useState(false);
  const { setValue } = useLocalStorage("tqttq");
  const [selectedImageRecto, setSelectedImageRecto] = useState(null);
  const [isChecked] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const submitFormData = async (values) => {
    console.log("Submitting form data model");

    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("image", values.recto);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: UrlSite("sign-up"),
      data: formData,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log("anaty try");
        console.log(response);

        setValue(response.data);
        navigate("/");
      })
      .catch((error) => {
        setOpenError(true);
        console.log("anaty catch");
        console.error(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      recto: null,
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
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
            paddingBottom: 8,
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
              Inscription
            </label>
            <form onSubmit={formik.handleSubmit}>
              <>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-around"}
                  alignItems={"flex-start"}
                >
                  <Grid
                    md={8}
                    container
                    direction={"column"}
                    justifyContent={"center"}
                    overflow={"hidden"}
                    sx={{
                      border: "2px dotted grey",
                      borderRadius: "50%",
                      alignItems: "center",
                    }}
                  >
                    {selectedImageRecto && (
                      <Grid
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                        overflow={"hidden"}
                        sx={{
                          width: "100%",
                          // height: "20vh",
                          textAlign: "center",
                          borderRadius: 5,
                        }}
                      >
                        <img
                          src={selectedImageRecto}
                          alt="Uploaded"
                          style={{ maxHeight: "23vh", borderRadius: "10px" }}
                        />
                      </Grid>
                    )}
                    {selectedImageRecto ? null : (
                      <Grid>
                        <Typography
                          textAlign={"center"}
                          variant="h4"
                          color={"#95c732"}
                        >
                          UpLoad Photo
                        </Typography>
                        <Backup style={{ fontSize: "7vw", opacity: 0.5 }} />
                      </Grid>
                    )}

                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="recto-upload"
                      name="recto"
                      type="file"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setSelectedImageRecto(reader.result);
                          };
                          reader.readAsDataURL(file);
                          formik.setFieldValue("recto", file);
                        }
                      }}
                    />

                    <label htmlFor="recto-upload">
                      <Button
                        sx={{ my: 2 }}
                        component="span"
                        style={{ color: "#EBCC24" }}
                        variant="outlined"
                        // startIcon={<CloudUpload />}
                      >
                        {selectedImageRecto ? "Changer" : "Parcourir"}
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </label>
                  </Grid>
                </Grid>
              </>
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
                    label="Mailaka"
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
                    label="Hamarino ny teny miafina"
                    className={classes.textField}
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    sx={{ bgcolor: "white", borderRadius: 1, zIndex: 0 }}
                    size="small"
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    type={
                      formik.values.showConfirmPassword ? "text" : "password"
                    }
                    value={formik.values.ConfirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.ConfirmPassword &&
                      Boolean(formik.errors.ConfirmPassword)
                    }
                    helperText={
                      formik.touched.ConfirmPassword &&
                      formik.errors.ConfirmPassword
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              formik.setValues({
                                ...formik.values,
                                showConfirmPassword:
                                  !formik.values.showConfirmPassword,
                              })
                            }
                            edge="end"
                          >
                            {formik.values.showConfirmPassword ? (
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
                Handefa
              </Button>
            </form>
            <Grid container justifyContent={"center"} my={2}>
              <Link to={"login"}>
                <Typography
                  color={PALETTE_COLORS.second}
                  sx={{ textDecoration: "underline" }}
                  variant="body2"
                  fontWeight={"bold"}
                >
                  Hiditra amin`i kaonty Google <Google fontSize="small" />
                </Typography>
              </Link>
            </Grid>
            <Grid container justifyContent={"center"} my={2}>
              <Link to={"login"}>
                <Typography
                  color={PALETTE_COLORS.second}
                  sx={{ textDecoration: "underline" }}
                  variant="body2"
                  fontWeight={"bold"}
                >
                  Hiditra
                </Typography>
              </Link>
            </Grid>
            <Grid container justifyContent={"center"} my={2}>
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

export default SingUp3;
