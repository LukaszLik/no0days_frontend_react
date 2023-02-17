import React from "react";
import { Checkbox, List, Modal, ModalClose, Sheet, Typography } from "@mui/joy";

type ModalProps = {
  open: boolean;
  setOpen: (setValueFunc: boolean) => void;
  val: number;
  month: string;
};

export default function ProgressModal(props: ModalProps) {
  const [checked, setChecked] = React.useState(false);
  let numberOfObjectives = 4;

  function checkboxOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.checked + "  /  " + e.target.id);
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={props.open}
      onClose={(event, reason) => {
        props.setOpen(false);
      }}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <ModalClose
          variant="plain"
          sx={{
            top: "calc(-1/4 * var(--IconButton-size))",
            right: "calc(-1/4 * var(--IconButton-size))",
            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
            borderRadius: "50%",
            bgcolor: "background.body",
          }}
        />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          {props.month} {props.val}
        </Typography>
        <Typography id="modal-desc" textColor="text.tertiary">
          Daily objectives achieved:
        </Typography>
        <List sx={{ mt: 2 }}>
          <Checkbox
            id="1"
            checked={checked}
            onChange={checkboxOnChange}
            variant="soft"
            label="Task 1"
            sx={{ mt: 1 }}
          />
          <Checkbox
            id="2"
            checked={checked}
            onChange={checkboxOnChange}
            variant="soft"
            label="Task 2"
            sx={{ mt: 1 }}
          />
          <Checkbox
            id="3"
            checked={checked}
            onChange={checkboxOnChange}
            variant="soft"
            label="Task 3"
            sx={{ mt: 1 }}
          />
          <Checkbox
            id="4"
            checked={checked}
            onChange={checkboxOnChange}
            variant="soft"
            label="Task 4"
            sx={{ mt: 1 }}
          />
        </List>
      </Sheet>
    </Modal>
  );
}
