import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./AddTodoForm";
import SearchForm from "./SeachTodoForm";
import Filter from "./Filter";

import { Layout, Row, Col } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Header, Content } = Layout;

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Make state",
      done: false
    },
    {
      text: "Make form",
      done: false
    },
    {
      text: "Make this app",
      done: true
    }
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const changeFilter = filter => {
    setFilter(filter);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text, done: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].done
      ? (newTodos[index].done = false)
      : (newTodos[index].done = true);

    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const searchTodo = text => {
    setSearch(text);
  };

  const searchTodos = (todos, search) => {
    if (search.length === 0) {
      return todos;
    }

    return todos.filter(todo => {
      console.log(search);
      return todo.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const filterTodos = (todos, filter) => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter(todo => !todo.done);
      case "done":
        return todos.filter(todo => todo.done);
      default:
        return todos;
    }
  };

  const visibleTodos = searchTodos(filterTodos(todos, filter), search);

  const result = todos.filter(todo => !todo.done);
  const message = () => {
    if (todos.length > 0) {
      if (result.length > 0) {
        return <div>{result.length} item left to do</div>;
      } else {
        return <div>All item left to do</div>;
      }
    } else {
      return <div>No item to do</div>;
    }
  };

  return (
    <Layout className="App">
      <Header theme="light" style={{ background: "#000" }}>
        <Title style={{ color: "white", margin: 5 }}>
          <Row type="flex">
            <Col span={12}>todos </Col>
            <Col span={12}>{message()}</Col>
          </Row>
        </Title>
      </Header>

      <Content style={{ padding: "10px 10px" }}>
        <Row type="flex" justify="center">
          <Col xs={24} md={18} xl={12}>
            <div style={{ background: "#fff", padding: 24 }}>
              <Row type="flex" gutter={16} justify="space-between">
                <Col sm={12} xs={24} style={{ paddingBottom: "8px" }}>
                  <SearchForm searchTodo={searchTodo} />
                </Col>
                <Col
                  sm={12}
                  xs={24}
                  align="end"
                  style={{ paddingBottom: "8px" }}
                >
                  <Filter
                    todos={todos}
                    changeFilter={changeFilter}
                    filter={filter}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <TodoList
                    todos={visibleTodos}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <TodoForm addTodo={addTodo} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
