import { Button, Card, FormControl, FormLabel, Input } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./login.scss";

export default function Login() {
  const [data, setData] = React.useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const [visible, setVisible] = React.useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`submit:\n email=${data.email}\n password=${data.password}`);
  }

  return (
    <div className="front">
      <div className="signin-div">
        <h2>
          Welcome to No 0 Days app! Sign in below to get access to its features.
        </h2>
      </div>
      <div className="form">
        <Card sx={{ background: "#cddae6", border: 2, borderColor: "#181c1b" }}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Username or email:</FormLabel>
              <Input
                className="form-input"
                required
                value={data.email}
                onChange={(event) =>
                  setData({ ...data, email: event.target.value })
                }
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mt: 2 }}>Password:</FormLabel>
              <Input
                className="form-input"
                type={visible ? "" : "password"}
                endDecorator={
                  <Button
                    onClick={() => setVisible(!visible)}
                    variant="outlined"
                    sx={{
                      width: 5,
                      color: "#181c1b",
                      borderColor: "transparent",
                    }}
                  >
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </Button>
                }
                required
                value={data.password}
                onChange={(event) =>
                  setData({ ...data, password: event.target.value })
                }
              ></Input>
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
                Sign in
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <div>
        <p>
          Don't have an account yet? <Link to="/register">Sign up now!</Link>
        </p>
      </div>
    </div>
  );
}
