import { Button, FormControl, FormLabel, Input } from "@mui/joy";
import React from "react";
import "./login.scss";

export default function Login() {
  console.log("login page");
  return (
    <div className="front">
      <div>LOGIN</div>
      <div className="form">
        <FormControl>
          <FormLabel sx={{ mt: 2 }}>Username or email:</FormLabel>
          <Input></Input>
        </FormControl>

        <FormControl>
          <FormLabel sx={{ mt: 2 }}>Password:</FormLabel>
          <Input></Input>
        </FormControl>
        <Button
          variant="outlined"
          sx={{
            width: 100,
            mt: 2,
            color: "#181c1b",
            borderColor: "#181c1b",
            border: 2,
          }}
        >
          {" "}
          LOGIN
        </Button>
      </div>
    </div>
  );
}
