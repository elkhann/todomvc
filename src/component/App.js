import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Footer from "./Footer";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Make state",
      isCompleted: false
    },
    {
      text: "Make form",
      isCompleted: false
    },
    {
      text: "Make this app",
      isCompleted: true
    }
  ]);

  const [filter, setFilter] = useState("Active");

  const changeFilter = filter => {
    setFilter(filter);
  };

  // const changeVisibleTodo = filter => {
  //   switch (filter) {
  //     case "Active":
  //       let filteredTodos = [...todos].filter(todo => !todo.isCompleted);
  //       return setVisibleTodo(filteredTodos);
  //     case "Completed":
  //       filteredTodos = [...todos].filter(todo => todo.isCompleted);
  //       return setVisibleTodo(filteredTodos);
  //     default:
  //       filteredTodos = [...todos];
  //       return setVisibleTodo(filteredTodos);
  //   }
  // };

  // console.log(visibleTodo);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted
      ? (newTodos[index].isCompleted = false)
      : (newTodos[index].isCompleted = true);

    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>todos {filter}</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
      <Footer todos={todos} changeFilter={changeFilter} />
    </div>
  );
};

export default App;
