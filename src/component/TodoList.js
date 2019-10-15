import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';

import { List, Button } from 'antd';

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={todos}
      renderItem={todo => (
        <List.Item>
          <List.Item.Meta
            title={todo.text}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.done
                ? 'line-through'
                : ''
            }}
          />
          <Button
            type='danger'
            onClick={() => removeTodo(todo.id)}
          >
            x
          </Button>
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = ({
  todos,
  visibilityFilter,
  searchTodo
}) => {
  const filteredTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.done);
      case 'done':
        return todos.filter(todo => todo.done);
      default:
        return todos;
    }
  };

  const searchedTodos = (todos, search) => {
    if (search.length === 0) {
      return todos;
    }
    return todos.filter(todo => {
      return (
        todo.text
          .toLowerCase()
          .indexOf(search.toLowerCase()) > -1
      );
    });
  };

  const visibleTodos = filteredTodos(
    searchedTodos(todos, searchTodo),
    visibilityFilter
  );

  return { todos: visibleTodos };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
