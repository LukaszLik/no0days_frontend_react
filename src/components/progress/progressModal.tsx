import React from "react";
import { Checkbox, List, Modal, ModalClose, Sheet, Typography } from "@mui/joy";

type ModalProps = {
  open: boolean;
  setOpen: (setValueFunc: boolean) => void;
  val: number;
  month: string;
};

type TaskAttributes = {
  id: number;
  name: string;
  completed: boolean;
};

export default function ProgressModal(props: ModalProps) {
  // temporary values, to be pulled from backend
  const Tasks: TaskAttributes[] = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
    { id: 4, name: "Task 4", completed: false },
  ];

  const [tasks, setTasks] = React.useState(Tasks);

  function checkboxOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    tasks.map((task, id) => {
      if (e.target.id === (id + 1).toString()) {
        setTasks(
          tasks.map((task) =>
            task.id === id + 1 ? { ...task, completed: e.target.checked } : task
          )
        );
      }
    });
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
          {tasks.map((task, idx) => {
            return (
              <Checkbox
                key={idx}
                id={task.id.toString()}
                checked={task.completed}
                onChange={checkboxOnChange}
                variant="soft"
                label={task.name}
                sx={{ mt: 1 }}
              />
            );
          })}
        </List>
      </Sheet>
    </Modal>
  );
}
