import React from 'react';
import TodoList from './TodoList';
import TodoForm from './AddTodoForm';
import SearchForm from './SeachTodoForm';
import Filter from './Filter';
import Header from './Header';

import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

const App = () => {
  return (
    <Layout className='App'>
      <Header></Header>

      <Content style={{ padding: '10px 10px' }}>
        <Row type='flex' justify='center'>
          <Col xs={24} md={18} xl={12}>
            <div
              style={{ background: '#fff', padding: 24 }}
            >
              <Row
                type='flex'
                gutter={16}
                justify='space-between'
              >
                <Col
                  sm={12}
                  xs={24}
                  style={{ paddingBottom: '8px' }}
                >
                  <SearchForm />
                </Col>
                <Col
                  sm={12}
                  xs={24}
                  align='end'
                  style={{ paddingBottom: '8px' }}
                >
                  <Filter />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <TodoList />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <TodoForm />
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
