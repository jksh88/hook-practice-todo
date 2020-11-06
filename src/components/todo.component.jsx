import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Todo = ({ todo, done }) => (
  <ListItemText>
    {`${todo} has been ${done ? "done" : "not done yet"}`}
  </ListItemText>
);

export default Todo;
