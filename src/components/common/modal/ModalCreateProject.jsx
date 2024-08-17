import * as yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton} from "@mui/material";
import { Backup, Clear} from "@mui/icons-material";
import axios from "axios";
import { PALETTE_COLORS } from "../../../constant/palette";
import {  styled } from "@mui/styles";
import { useFormik } from "formik";
import { useState } from "react";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import { useNavigate } from "react-router";
import { UrlSite } from "../../../utils";

// const useStyles = makeStyles({
//   textField: {
//     // width: "100%",
//     "& .MuiInputBase-root": {
//       height: "5vh",
//       fontSize: "0.8rem", // Taille du texte
//       padding: 0, // Espacement intérieur
//       borderRadius: "4px", // Bordure
//     },
//     "& .MuiInputLabel-root": {
//       fontSize: "0.8rem", // Taille du label
//       backgroundColor: "white",
//       padding: "0 10px",
//       marginLeft: "-5px",
//       borderRadius: 4,
//       zIndex: 2,
//     },
//   },
// });
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
export default function ModalCreateProject(props) {
  const { open, setOpen } = props;
  // const [openSucces, setOpenSucces] = useState(false);
  // const [openError, setOpenError] = useState(false);
  const handleClose = () => setOpen(false);
  const { setValue}=useLocalStorage("token")
  const [selectedImageRecto, setSelectedImageRecto] = useState(null);
  const [isChecked] = useState(false);
  const navigate = useNavigate();


  const submitFormData = async (values) => {
    console.log("Submitting form data model");

    const formData = new FormData();
    formData.append("file", values.recto);
    formData.append("status", values.status);
    formData.append("budget", values.budget);
    formData.append("description", values.description);
    formData.append("requestDate", values.requestDate);
    formData.append("realisationDate", values.realisationDate);
    formData.append("typeId", values.typeId);
    formData.append("userId", values.userId);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: UrlSite("projects"),
      data: formData,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log("anaty try");
        console.log(response);
     
        setValue(response.data)
        navigate("/")
      })
      .catch((error) => {
        console.log("anaty catch");
        console.error(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      userId: 1,
      typeId: 1,
      status: true,
      budget: null,
      realisationDate: "2026-01-01T00:00:00Z",
      requestDate: "2025-01-01T00:00:00Z",
      description: "",
      recto: null,
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
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} borderRadius={5}>
          <Grid container position={"relative"} mb={3}>
            <Grid
              container
              justifyContent={"flex-end"}
              position={"absolute"}
              zIndex={55}
              left={20}
            >
              <IconButton
                onClick={handleClose}
                size="small"
                sx={{ boxShadow: "0 0 10px" }}
              >
                <Clear />
              </IconButton>
            </Grid>
          </Grid>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={"revert"}
          >
            Hanangana tetikasa
          </Typography>
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
                {/* <TextField
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
                /> */}
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
                {/* <TextField
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
                  helperText={formik.touched.password && formik.errors.password}
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
                /> */}
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
              {/* <Box borderRadius={1} width={"70%"}>
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
                  type={formik.values.showConfirmPassword ? "text" : "password"}
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
              </Box> */}
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
        </Box>
      </Modal>
    </>
  );
}
