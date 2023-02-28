import { Button, CircularProgress, Typography } from "@mui/joy";
import React from "react";
import ProgressModal from "./progressModal";

type Props = {
  var: number;
  day: number;
  month: string;
};
export default function Progress(props: Props) {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(props.var);
  function taskMenu() {
    setOpen(true);
  }
  return (
    <div>
      <div>
        <Typography
          id="progress-day"
          level="h6"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          {props.day}
        </Typography>
      </div>
      <Button
        onClick={taskMenu}
        variant="plain"
        sx={{
          "&:hover": {
            background: "none",
          },
        }}
      >
        <CircularProgress
          determinate
          value={progress}
          size="lg"
          variant="outlined"
          sx={{
            "--CircularProgress-size": "7.5vh",
            "--CircularProgress-track-thickness": "0.8vh",
            "--CircularProgress-progress-thickness": "5px",
          }}
        >
          {" "}
          {progress} %
        </CircularProgress>
      </Button>
      <ProgressModal
        open={open}
        setOpen={setOpen}
        val={{ progress, setProgress }}
        day={props.day}
        month={props.month}
      ></ProgressModal>
    </div>
  );
}
