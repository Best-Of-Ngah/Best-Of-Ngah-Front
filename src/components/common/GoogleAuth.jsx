/* eslint-disable react/prop-types */
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PALETTE_COLORS } from "../../constant/palette.js";
import { Grid, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

const GoogleAuth = ({ setUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${response.access_token}` },
          }
        );
        const userData = res.data;
        setUser(userData);
        // Stocker les données de l'utilisateur dans localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/dashboard");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Grid onClick={() => login()} sx={{ cursor: "pointer" }}>
        <Typography
          color={PALETTE_COLORS.second}
          sx={{ textDecoration: "underline" }}
          variant="body2"
          fontWeight={"bold"}
        >
          {loading ? (
            "Miandry..."
          ) : (
            <>
              {"Hiditra amin`i` kaonty Google"}
              <Google fontSize="small" />
            </>
          )}
        </Typography>
      </Grid>
    </>
  );
};

export default GoogleAuth;
