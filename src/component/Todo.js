import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
      <span
        onClick={completeTodo}
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </span>
      <button onClick={removeTodo}>x</button>
    </div>
  );
};

export default Todo;
