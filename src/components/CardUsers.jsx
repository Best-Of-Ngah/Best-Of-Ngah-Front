import { Box, Avatar, Typography, CircularProgress } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { PALETTE_COLORS } from "../../../constant/palette.js";
import { useState, useEffect } from "react";

const CardUsers = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsersCount(data.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 700,
        height: 200,
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        p: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ bgcolor: PALETTE_COLORS.second, width: 80, height: 80 }}>
          <PersonIcon sx={{ fontSize: 48 }} />
        </Avatar>
        <Box sx={{ ml: 3 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: PALETTE_COLORS.second,
            }}
          >
            {loading ? <CircularProgress size={32} /> : usersCount}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: 24,
              color: PALETTE_COLORS.black,
            }}
          >
            All Users
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardUsers;
