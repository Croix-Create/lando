import React from "react";
import { AppBar, Toolbar, Box, Button, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";

const Logo = styled("img")({
  height: 40,
  paddingLeft: "20px",
});

const NavLinks = styled(Box)({
  display: "flex",
  gap: "30px",
  flexGrow: 1,
  justifyContent: "center",
});

const SignUpButton = styled(Button)({
    border: "1px solid white",
    borderRadius: "4px", // Slightly rounded corners
    color: "white",
    marginRight: "10px",
    textTransform: "none",
    backgroundColor: "transparent", // Transparent background
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    },
  });

const LoginButton = styled(Button)({
  backgroundColor: "#FFD700",
  color: "#121212",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#E6C200",
  },
});

const NavBarCenterText = styled(Button)({
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "capitalize",
  "&:hover": {
    color: "#FFD700",
  },
});

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#121212", padding: "10px 0" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Logo on the left */}
        <Logo src="/images/High-Five-Logo.png" alt="High-Five-Logo" />

        <NavLinks>
          <NavBarCenterText>
            <Typography variant="body1">Home</Typography>
          </NavBarCenterText>
          <NavBarCenterText>
            <Typography variant="body1">Browse</Typography>
          </NavBarCenterText>
          <NavBarCenterText>
            <Typography variant="body1">Pricing</Typography>
          </NavBarCenterText>
        </NavLinks>

        {/* Right-side buttons and icon */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <img src="/svgs/Shopping-Cart.svg" alt="Cart Icon" style={{ height: 24, paddingRight: "20px" }} />
          </IconButton>
          <SignUpButton variant="contained">Sign Up</SignUpButton>
          <LoginButton variant="contained">Login</LoginButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;