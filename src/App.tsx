import React from "react";
import "./App.scss";
import Navbar from "./common/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/loginPage/login";
import FrontPage from "./components/frontPage/frontPage";
import Register from "./components/registerPage/register";
import { CssVarsProvider } from "@mui/joy/styles";
import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#C0CCD9",
          100: "#A5B8CF",
          200: "#096bde",
          300: "#4886D0",
          400: "#2178DD",
          500: "#096BDE",
          600: "#1B62B5",
          700: "#265995",
          800: "#2F4968",
          900: "#2F3C4C",
        },
      },
    },
  },
});

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Wallpoet"
      />
      <BrowserRouter>
        <Navbar></Navbar>
        <CssVarsProvider theme={theme}>
          <Routes>
            <Route index element={<FrontPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/*<Route path="*" element={<NoPage />} />*/}
          </Routes>
        </CssVarsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
