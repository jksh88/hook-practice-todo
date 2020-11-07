import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "../hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          fullWidth
          label="Add new Todo here"
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
