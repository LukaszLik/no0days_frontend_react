import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/joy";
import React from "react";
import "./register.scss";

export default function Register() {
  console.log("register page");
  return (
    <div className="bg">
      <div>REGISTER</div>
      <div className="form">
        <FormControl>
          <FormLabel sx={{ mt: 2 }}>Username:</FormLabel>
          <Input></Input>

          <FormLabel sx={{ mt: 2 }}>Email:</FormLabel>
          <Input></Input>

          <FormLabel sx={{ mt: 2 }}>Password:</FormLabel>
          <Input></Input>
          <FormHelperText>
            Password should have at least 8 characters.
          </FormHelperText>

          <FormLabel sx={{ mt: 2 }}>Confirm password:</FormLabel>
          <Input></Input>
          <Button type="submit">REGISTER</Button>
        </FormControl>
      </div>
    </div>
  );
}
