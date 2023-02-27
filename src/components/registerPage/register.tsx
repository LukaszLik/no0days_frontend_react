import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/joy";
import React from "react";
import "./register.scss";

export default function Register() {
  const [data, setData] = React.useState<{
    username: string;
    email: string;
    password1: string;
    password2: string;
  }>({ username: "", email: "", password1: "", password2: "" });

  const [error, setError] = React.useState<{
    username: boolean;
    email: boolean;
    password1: boolean;
    password2: boolean;
  }>({ username: false, email: false, password1: false, password2: false });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log(
      `reg:\n ${data.username}\n${data.email}\n${data.password1}\n${data.password2}`
    );
  }

  function validateForm() {
    if (data.username === "") {
      setError({ ...error, username: true });
    } else {
      setError({ ...error, username: false });
    }
  }

  function usernameOnChange(event: React.ChangeEvent<HTMLInputElement>){
    setData({ ...data, username: event.target.value });

      if (event.target.value === "") {
        setError({ ...error, username: true });
      } else {
        setError({ ...error, username: false });
      }
  }

  function emailOnChange(event: React.ChangeEvent<HTMLInputElement>){
    setData({...data, email: event.target.value})
      const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (data.email.length === 0 || !regex.test(event.target.value)) {
      setError({ ...error, email: true });
    } else {
      setError({ ...error, email: false });
    }
  }

  return (
    <div className="front">
      <div className="register-form">
        <Card sx={{ background: "#cddae6", border: 2, borderColor: "#181c1b" }}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Username:</FormLabel>
              <Input
                className={error.username ? "form-input-error" : "form-input"}
                required
                error={error.username}
                value={data.username}
                onChange={usernameOnChange}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Email:</FormLabel>
              <Input
                className={error.email ? "form-input-error" : "form-input"}
                required
                error={error.email}
                value={data.email}
                onChange={emailOnChange
                }
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Password:</FormLabel>
              <Input
                className={error.password1 ? "form-input-error" : "form-input"}
                required
                error={error.password1}
                value={data.password1}
                onChange={(event) =>
                  setData({ ...data, password1: event.target.value })
                }
              ></Input>
              <FormHelperText>Must have at least 8 characters.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Confirm password:</FormLabel>
              <Input
                className={error.password2 ? "form-input-error" : "form-input"}
                required
                error={error.password2}
                value={data.password2}
                onChange={(event) =>
                  setData({ ...data, password2: event.target.value })
                }
              ></Input>
            </FormControl>
            <div className="button-div">
              <Button
                type="submit"
                onClick={validateForm}
                variant="outlined"
                sx={{
                  width: 100,
                  mt: 3,
                  color: "#181c1b",
                  borderColor: "#181c1b",
                  border: 2,
                }}
              >
                {" "}
                Sign up
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
