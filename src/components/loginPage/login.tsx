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
          <FormLabel sx={{ mt: 2 }}>Username or email:</FormLabel>
          <Input></Input>

          <FormLabel sx={{ mt: 2 }}>Password:</FormLabel>
          <Input></Input>
          <Button type="submit">LOGIN</Button>
        </FormControl>
      </div>
    </div>
  );
}
