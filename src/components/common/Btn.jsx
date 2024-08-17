import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Logout, MenuBook, Person } from "@mui/icons-material";
import { PALETTE_COLORS } from "../../constant/palette";
import { useLocalStorage } from "../../utils/useLocalStorage";

export default function BasicMenu() {
  const { removeValue } = useLocalStorage("token");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    removeValue();
    window.location.reload();
  };
  

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: PALETTE_COLORS.main }}
      >
        <Person />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button
            variant="text"
            sx={{ color: PALETTE_COLORS.main }}
            startIcon={<MenuBook />}
          >
            Rindriko
          </Button>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Button
            variant="text"
            sx={{ color: PALETTE_COLORS.main }}
            startIcon={<Logout />}
          >
            Hiala
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
