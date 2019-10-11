import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

import { List, Button } from 'antd';

const TodoList = ({ todos, removeTodo }) => {
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
          <Button type='danger' onClick={removeTodo}>
            x
          </Button>
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
