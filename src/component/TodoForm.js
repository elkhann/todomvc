import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  console.log(value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="What need to be done?"
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add todo</button>
    </form>
  );
};

export default TodoForm;
