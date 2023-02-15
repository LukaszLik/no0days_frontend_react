import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/joy";
import React from "react";
import "./login.scss";

export default function Login() {
  console.log("login page");
  return (
    <div className="bg">
      <div>LOGIN</div>
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
          <Button type="submit">Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}
