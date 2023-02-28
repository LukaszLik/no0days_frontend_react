import React from "react";
import Progress from "../progress/progress";
import "./frontPage.scss";
import { Divider, Grid } from "@mui/joy";

export default function FrontPage() {
  const date = new Date();
  const month = date.toLocaleDateString("default", { month: "long" });
  const numberOfDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const offset = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  let progressArray = [];
  for (let i = 0; i < offset - 1; i++) {
    progressArray.push(<div></div>);
  }
  for (let i = 0; i < numberOfDays; i++) {
    progressArray.push(<Progress var={0} day={i + 1} month={month} />);
  }

  return (
    <div className="front">
      <div className="month-name">
        <h1>{month}</h1>
      </div>
      {/*<Progress var={25} />*/}
      <div className="grid-div">
        <Grid
          container
          direction="row"
          columns={7}
          sx={{
            width: "60vw",
            height: "70vh",
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

          {progressArray.map((obj, idx) => {
            return (
              <Grid key={idx} xs={1}>
                {obj}
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
