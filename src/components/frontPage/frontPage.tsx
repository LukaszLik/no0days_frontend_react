import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Progress from "../progress/Progress";

export default function FrontPage() {
  console.log("login page");
  return (
    <div>
      <div>body</div>
      <CssVarsProvider>
        <Progress var={25} />
      </CssVarsProvider>
    </div>
  );
}
