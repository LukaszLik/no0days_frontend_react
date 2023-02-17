import { Button, CircularProgress } from "@mui/joy";
import React from "react";
import ProgressModal from "./progressModal";

type Props = {
  var: number;
  month: string;
};
export default function Progress(props: Props) {
  const [open, setOpen] = React.useState(false);
  function taskMenu() {
    setOpen(true);
  }
  return (
    // <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
    <div>
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
          value={props.var}
          size="lg"
          variant="outlined"
        >
          {" "}
          {props.var}
        </CircularProgress>
      </Button>
      <ProgressModal
        open={open}
        setOpen={setOpen}
        val={props.var}
        month={props.month}
      ></ProgressModal>
    </div>
    // </Box>
  );
}
