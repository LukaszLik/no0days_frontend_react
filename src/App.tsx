import React from "react";
import "./App.scss";
import Navbar from "./common/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/loginPage/login";
import FrontPage from "./components/frontPage/frontPage";
import Register from "./components/registerPage/register";
import { CssVarsProvider } from "@mui/joy/styles";

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
        <CssVarsProvider>
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
