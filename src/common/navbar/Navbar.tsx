import React from "react";
import "./Navbar.scss";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

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
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ flexGrow: 1, color: "#e7063c" }}
          >
            no0days_logo_placeholder
          </Typography>
          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
            <Button
              onClick={loginButton}
              variant="outlined"
              sx={{ margin: 1, color: "#e7063c", borderColor: "#e7063c" }}
            >
              Login
            </Button>

            <Button
              onClick={registerButton}
              variant="outlined"
              sx={{ margin: 1, color: "#e7063c", borderColor: "#e7063c" }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
