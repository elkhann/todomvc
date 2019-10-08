import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return todos.map((todo, index) => (
    <Todo
      key={index}
      todo={todo}
      removeTodo={() => removeTodo(index)}
      completeTodo={() => completeTodo(index)}
    />
  ));
};

export default TodoList;
