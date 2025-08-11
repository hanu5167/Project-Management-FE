import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;

export const navList = ["Dashboard", "Projects", "Teams", "Reports"];

const Navbar = (props) => {
  const { mobileOpen, handleDrawerToggle, isMobile } = props;

  const drawerContent = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navList.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
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
