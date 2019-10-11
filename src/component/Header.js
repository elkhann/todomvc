import React from "react";
import { Row, Col, Typography, Layout } from "antd";

const Header = ({ todos }) => {
  const result = todos.filter(todo => !todo.done);
  const message = () => {
    if (todos.length > 0) {
      if (result.length > 0) {
        return <div>{result.length} item left</div>;
      } else {
        return <div>All item left</div>;
      }
    } else {
      return <div>No item</div>;
    }
  };
  return (
    <Layout.Header>
      <Row type="flex" justify="center">
        <Col xs={24} md={18} xl={12}>
          <Typography.Title style={{ color: "white", margin: 5 }}>
            <Row type="flex" justify="space-between">
              <Col span={6}>todos</Col>
              <Col span={18} align="right">
                {message()}
              </Col>
            </Row>
          </Typography.Title>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
