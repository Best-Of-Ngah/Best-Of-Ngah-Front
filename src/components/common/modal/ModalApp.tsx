import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid, TextField, IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";
import axios from "axios";
import { PALETTE_COLORS } from "../../../constant/palette";

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

type FormValues = z.infer<typeof schema>;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalApp(props: any) {
  const { open, setOpen } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      name: "",
      contact: "",
      email: "",
      message: "",
      appointmentDate: "",
      status: "PENDING"
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
      status: "PENDING"
    });
  }, [ reset]);

  const handleClose = () => setOpen(false);

  const formatAppointmentDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  };

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    console.log(formData);

    const formattedDate = formatAppointmentDate(formData.appointmentDate);
    const updatedFormData = { ...formData, appointmentDate: formattedDate };

    try {
      const response = await axios.post(('appointments'), updatedFormData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200 || response.status === 201) {
        handleClose();
        reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
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
          <Typography variant="h5" fontWeight={'bold'} textAlign={"center"} fontFamily={"revert"}>
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
            />
            <Grid container justifyContent={"flex-end"}>
              <Button
                variant="contained"
                color="warning"
                sx={{ bgcolor: PALETTE_COLORS.second }}
                type="submit"
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
