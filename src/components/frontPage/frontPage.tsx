import React from "react";
import Progress from "../progress/Progress";
import "./frontPage.scss";

export default function FrontPage() {
  console.log("front page");
  return (
    <div className="front">
      <div>body</div>
      <Progress var={25} />
    </div>
  );
}
