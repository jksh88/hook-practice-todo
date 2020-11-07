import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TodoList from "./components/todoList.component.jsx";
import TodoForm from "./components/todoForm.component.jsx";
import "./App.css";
import uuid from "uuid/dist/v4";
import todoList from "./components/todoList.component.jsx";

function TodoApp() {
  const initialTodos = [
    { id: 1, todo: "Feed dog", done: false },
    { id: 2, todo: "Walk dog", done: false },
    { id: 3, todo: "Wash dog", done: false },
  ];
  const [todos, setTodo] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodo([...todos, { id: uuid(), todo: newTodoText, done: false }]);
  };

  const removeTodo = (removeId) =>
    setTodo(todos.filter((todo) => todo.id !== removeId));

  const toggleTodo = (toggleId) => {
    const toggledTodos = todos.map((todo) => {
      return todo.id === toggleId ? { ...todo, done: !todo.done } : todo;
    });
    console.log("HERH: ", toggledTodos);

    setTodo(toggledTodos);
  };

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
      <div className="grid-container">
        {/* <div className="grid-item"> */}
        <TodoForm addTodo={addTodo} />
        <TodoList
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          todos={todos}
        />
        {/* </div> */}
      </div>
    </Paper>
  );
}

export default TodoApp;
