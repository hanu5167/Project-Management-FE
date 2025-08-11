import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleDrawerToggle = () => {
    setSidebarVisible(!sidebarVisible);
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header onDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Navbar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          isMobile={isMobile}
          sidebarVisible={sidebarVisible}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            mt: 8, 
            p: 3,
            width:"100%",
            overflow:"auto"
          }}
        >
          {props.children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
