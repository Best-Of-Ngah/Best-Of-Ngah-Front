import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid, TextField, IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";
import axios from "axios";
import { PALETTE_COLORS } from "../../../constant/palette";
import { useState } from "react";
import { send } from "emailjs-com";

const schema = z.object({
  carId: z.number(),
  firstName: z.string().nonempty("First Name is required"),
  name: z.string().nonempty("Last Name is required"),
  email: z.string().email("Invalid email address"),
  contact: z.string().nonempty("Contact is required"),
  appointmentDate: z.string().nonempty("Date is required"),
  message: z.string().nonempty("Message is required"),
  status: z.string(),
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

export default function ModalApp(props) {
  const { open, setOpen } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      name: "",
      contact: "",
      email: "",
      message: "",
      appointmentDate: "",
      status: "PENDING",
    },
  });

  React.useEffect(() => {
    reset({
      firstName: "",
      name: "",
      contact: "",
      email: "",
      message: "",
      appointmentDate: "",
      status: "PENDING",
    });
  }, [reset]);

  const handleClose = () => setOpen(false);

  const formatAppointmentDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  };

  const onSubmit = async (formData) => {
    console.log(formData);

    const formattedDate = formatAppointmentDate(formData.appointmentDate);
    const updatedFormData = { ...formData, appointmentDate: formattedDate };

    try {
      const response = await axios.post("appointments", updatedFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200 || response.status === 201) {
        handleClose();
        reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const templateParams = {
      last_name: lastName,
      first_name: firstName,
      email,
      message,
    };

    try {
      const response = await send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.EMAILJS_ACCOUNT_ID
      );
      console.log("Email envoyé avec succès!", response.status, response.text);
      alert("Email envoyé avec succès!");
      setLastName("");
      setFirstName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Échec de l'envoi de l'email:", err);
      alert("Échec de l'envoi de l'email. Veuillez réessayer.");
    }
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
            Hifandray aminay
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              size="small"
              sx={{ my: 1 }}
              fullWidth
              label="Anarana"
              {...register("name")}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
            <TextField
              size="small"
              sx={{ my: 1 }}
              fullWidth
              label="Fanampiny"
              {...register("firstName")}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
            <TextField
              size="small"
              sx={{ my: 1 }}
              fullWidth
              label="Mailaka"
              {...register("email")}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              sx={{ my: 1 }}
              fullWidth
              multiline
              rows={4}
              label="Hafatra"
              {...register("message")}
              error={Boolean(errors.message)}
              helperText={errors.message?.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Grid container justifyContent={"flex-end"}>
              <Button
                variant="contained"
                color="warning"
                sx={{ bgcolor: PALETTE_COLORS.second }}
                type="submit"
                onClick={sendEmail}
              >
                Handefa
              </Button>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}
