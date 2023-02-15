import React from "react";
import "./Navbar.scss";
import { Button, AppBar, Box, Toolbar, Typography } from "@mui/material";
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
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ flexGrow: 1 }}
          >
            no0days_logo_placeholder
          </Typography>
          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
            <Button
              onClick={loginButton}
              variant="outlined"
              color="inherit"
              sx={{ margin: 1 }}
              className="button"
            >
              Login
            </Button>

            <Button
              onClick={registerButton}
              variant="outlined"
              color="inherit"
              sx={{ margin: 1 }}
              className="button"
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
