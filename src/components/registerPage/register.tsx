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
  return (
    <div className="front">
      <div>REGISTER</div>
      <div className="form">
        <FormControl>
          <FormLabel sx={{ mt: 2 }}>Username:</FormLabel>
          <Input></Input>
        </FormControl>
        <FormControl>
          <FormLabel sx={{ mt: 2 }}>Email:</FormLabel>
          <Input></Input>
        </FormControl>
        <FormControl>
          <FormLabel sx={{ mt: 2 }}>Password:</FormLabel>
          <Input></Input>
          <FormHelperText>Must have at least 8 characters.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel sx={{ mt: 2 }}>Confirm password:</FormLabel>
          <Input></Input>
        </FormControl>
        <Button sx={{ width: 100, mt: 2 }}>REGISTER</Button>
      </div>
    </div>
  );
}
