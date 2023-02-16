import React from "react";
import Progress from "../progress/Progress";
import "./frontPage.scss";
import { Divider, Grid } from "@mui/joy";

export default function FrontPage() {
  console.log("front page");
  const date = new Date();
  const month = date.toLocaleDateString("default", { month: "long" });
  const numberOfDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  console.log("test: " + date.getFullYear() + " " + date.getMonth());
  console.log("ilosc dni = " + numberOfDays);
  const offset = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  console.log("day = " + offset);

  let progressArray = [];
  for (let i = 0; i < offset - 1; i++) {
    progressArray.push(<div></div>);
  }
  for (let i = 0; i < numberOfDays; i++) {
    progressArray.push(<Progress var={i + 1} />);
  }

  return (
    <div className="front">
      <div className="month-name">
        <h1>{month}</h1>
      </div>
      {/*<Progress var={25} />*/}
      <Grid
        container
        direction="row"
        columns={7}
        sx={{
          "--Grid-borderWidth": "2px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          },
        }}
      >
        <Grid xs={1}>
          <h5>Mon</h5>
        </Grid>
        <Grid xs={1}>
          <h5>Tue</h5>
        </Grid>
        <Grid xs={1}>
          <h5>Wed</h5>
        </Grid>
        <Grid xs={1}>
          <h5>Thu</h5>
        </Grid>
        <Grid xs={1}>
          <h5>Fri</h5>
        </Grid>
        <Grid xs={1}>
          <h5 className="weekend">Sat</h5>
        </Grid>
        <Grid xs={1}>
          <h5 className="weekend">Sun</h5>
        </Grid>
        <Divider orientation="horizontal" />

        {progressArray.map(function (obj) {
          return <Grid xs={1}>{obj}</Grid>;
        })}
      </Grid>
    </div>
  );
}
