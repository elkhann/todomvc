import React from "react";
import { List, Button } from "antd";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo, index) => (
        <List.Item>
          <List.Item.Meta
            title={todo.text}
            onClick={() => completeTodo(index)}
            style={{ textDecoration: todo.done ? "line-through" : "" }}
          />
          <Button type="danger" onClick={removeTodo}>
            x
          </Button>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
