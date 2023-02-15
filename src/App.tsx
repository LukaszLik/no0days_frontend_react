import React from "react";
import "./App.scss";
import Navbar from "./common/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/loginPage/login";
import FrontPage from "./components/frontPage/frontPage";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route index element={<FrontPage />} />
          <Route path="/login" element={<Login />} />
          {/*<Route path="*" element={<NoPage />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
