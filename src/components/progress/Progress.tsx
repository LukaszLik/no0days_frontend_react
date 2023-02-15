import { CircularProgress } from "@mui/joy";
import React from "react";

type Props = {
  var: number;
};
export default function Progress(props: Props) {
  console.log(props.var);
  return (
    // <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
    <CircularProgress
      determinate
      value={props.var}
      size="lg"
      variant="outlined"
    >
      {" "}
      {props.var}
    </CircularProgress>

    // </Box>
  );
}
