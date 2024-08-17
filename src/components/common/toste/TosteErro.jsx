import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

export default function TosteError(props) {
  const open = props.open;
  const setOpen = props.setOpen;
  const message = props.message;

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
