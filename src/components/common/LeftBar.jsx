import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Person, Star, Work } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PALETTE_COLORS } from "../../constant/palette";

export default function LeftBar() {
  return (
    <div>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        bgcolor={PALETTE_COLORS.main}
        height={"100%"}
      >
        <Link href={"#home"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="testfont">
                <Home sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"#skills"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="testfont">
                <Star sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={"Skills"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"#about"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="testfont">
                <Person sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={"About Me"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"#project"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="testfont">
                <Work sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={"Project"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </Box>
    </div>
  );
}
