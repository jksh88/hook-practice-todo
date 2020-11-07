import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Todo from "./todo.component.jsx";

const todoList = (props) => (
  <Paper>
    <List>
      {props.todos.map(({ id, ...rest }) => (
        <>
          <ListItem>
            <Todo
              key={id}
              id={id}
              {...rest}
              removeTodo={props.removeTodo}
              toggleTodo={props.toggleTodo}
            />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  </Paper>
);

export default todoList;
