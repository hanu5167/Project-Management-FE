import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

// export const navList = ["Dashboard", "Projects", "Teams", "Reports"];
export const navList = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 3,
    name: "Teams",
    path: "/teams",
  },
  {
    id: 4,
    name: "Reports",
    path: "/reports",
  },
];

const Navbar = (props) => {
  const { mobileOpen, handleDrawerToggle, isMobile } = props;

  const drawerContent = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navList.map((list) => (
          <Link to={list.path} key={list.id}>
            <ListItemText primary={list.name} />
          </Link>
        ))}
      </List>
    </div>
  );

  return isMobile ? (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      {drawerContent}
    </Drawer>
  ) : (
    <span></span>
    // <Drawer
    //   variant="persistent"
    //   open={mobileOpen}
    //   sx={{
    //     width: mobileOpen ? drawerWidth : 0,
    //     flexShrink: 0,
    //     "& .MuiDrawer-paper": {
    //       width: drawerWidth,
    //       boxSizing: "border-box",
    //     },
    //   }}
    // >
    //   {drawerContent}
    // </Drawer>
  );
};

export default Navbar;
