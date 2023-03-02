import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
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

  const [sent, setSent] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      `reg:\n ${data.username}\n${data.email}\n${data.password1}\n${data.password2}`
    );
    console.log(window.location.href);

    if (window.location.href.endsWith("?")) {
      console.log("sent");
      setSent(true);
    } else {
      setSent(false);
      console.log("not sent");
    }

    if (
      !error.username &&
      !error.email &&
      !error.password1 &&
      !error.password2
    ) {
      setSent(true);
    } else {
      setSent(false);
    }
  }

  function usernameOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, username: event.target.value });

    if (event.target.value === "") {
      setError({ ...error, username: true });
    } else {
      setError({ ...error, username: false });
    }
  }

  function emailOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, email: event.target.value });
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (data.email.length === 0 || !regex.test(event.target.value)) {
      setError({ ...error, email: true });
    } else {
      setError({ ...error, email: false });
    }
  }

  function password1OnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setData({ ...data, password1: event.target.value });

    if (!reg.test(event.target.value)) {
      setError({ ...error, password1: true });
    } else {
      setError({ ...error, password1: false });
    }
  }

  function password2OnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, password2: event.target.value });

    if (data.password1 !== event.target.value) {
      setError({ ...error, password2: true });
    } else {
      setError({ ...error, password2: false });
    }
  }

  return (
    <div className="front">
      <div className="signup-div">
        <h2>Sign up below to get access to No 0 Days App!</h2>
      </div>
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
              {error.username ? (
                <FormHelperText className="input-helper">
                  Username cannot be empty.
                </FormHelperText>
              ) : (
                <div></div>
              )}
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Email:</FormLabel>
              <Input
                className={error.email ? "form-input-error" : "form-input"}
                required
                error={error.email}
                value={data.email}
                onChange={emailOnChange}
              ></Input>
              {error.email ? (
                <FormHelperText className="input-helper">
                  Please enter a valid email address.
                </FormHelperText>
              ) : (
                <div></div>
              )}
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Password:</FormLabel>
              <Input
                className={error.password1 ? "form-input-error" : "form-input"}
                required
                type="password"
                error={error.password1}
                value={data.password1}
                onChange={password1OnChange}
              ></Input>
              {error.password1 ? (
                <FormHelperText className="input-helper">
                  Minimum 8 characters, at least 1 letter and 1 number.
                </FormHelperText>
              ) : (
                <div></div>
              )}
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Confirm password:</FormLabel>
              <Input
                className={error.password2 ? "form-input-error" : "form-input"}
                required
                type="password"
                error={error.password2}
                value={data.password2}
                onChange={password2OnChange}
              ></Input>
              {error.password2 ? (
                <FormHelperText className="input-helper">
                  Passwords do not match.
                </FormHelperText>
              ) : (
                <div></div>
              )}
            </FormControl>
            <div className="button-div">
              <Button
                type="submit"
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
      <div>
        <p>
          Already have an account? <Link className="link" to="/login">Sign in now!</Link>
        </p>
      </div>
      {sent ? (
        <div className="signup-div">
          <h2 className="registered-message">
            Your account has been registered! To log in click{" "}
            <Link className="link" to={"/login"}>here</Link>.
          </h2>
        </div>
      ) : (
        <div className="signup-div"></div>
      )}
    </div>
  );
}
