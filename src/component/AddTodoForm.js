import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import { Row, Col, Form, Input, Button } from 'antd';

const TodoForm = ({ dispatch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row type='flex' gutter={12}>
        <Col span={12}>
          <Input
            size='large'
            type='text'
            value={value}
            placeholder='What need to be done?'
            onChange={e => setValue(e.target.value)}
          />
        </Col>
        <Col span={12}>
          <Button
            disabled={value ? false : true}
            type='primary'
            size='large'
            onClick={handleSubmit}
          >
            Add todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default connect()(TodoForm);
