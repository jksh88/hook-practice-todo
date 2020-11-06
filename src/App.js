import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TodoList from "./components/todoList.component.jsx";

function TodoApp() {
  const initialTodos = [
    { id: 1, todo: "Feed dog", done: false },
    { id: 2, todo: "Walk dog", done: false },
    { id: 3, todo: "Wash dog", done: true },
  ];
  const [todos, setTodo] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
