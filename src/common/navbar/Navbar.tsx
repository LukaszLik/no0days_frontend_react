import React from "react";
import "./Navbar.scss";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  function logoButton() {
    navigate("/");
  }
  function loginButton() {
    navigate("/login");
  }

  function registerButton() {
    navigate("/register");
  }
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Button
            onClick={logoButton}
            variant="plain"
            sx={{
              flexGrow: 1,
              maxWidth: 165,
              "&:hover": {
                background: "none",
              },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              align="left"
              sx={{ flexGrow: 1, color: "#e7063c", fontFamily: "Wallpoet" }}
            >
              NO 0 DAYS
            </Typography>
          </Button>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ flexGrow: 1 }}
          >
            <Button
              onClick={loginButton}
              variant="outlined"
              sx={{ margin: 1, color: "#e7063c", borderColor: "#e7063c" }}
            >
              Sign in
            </Button>

            <Button
              onClick={registerButton}
              variant="outlined"
              sx={{ margin: 1, color: "#e7063c", borderColor: "#e7063c" }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
