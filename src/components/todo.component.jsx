import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const Todo = ({ id, todo, done, removeTodo, toggleTodo }) => (
  <>
    <Checkbox checked={done} onClick={() => toggleTodo(id)} />
    <ListItemText style={{ textDecoration: done ? "line-through" : "none" }}>
      {todo}
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="Edit">
        <EditIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </>
);

export default Todo;
