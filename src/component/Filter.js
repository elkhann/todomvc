import React from "react";
import { Button } from "antd";

const Footer = ({ todos, changeFilter, filter }) => {
  const isActive = type => {
    if (type === filter) {
      return "primary";
    }
  };

  return (
    <div>
      <Button.Group>
        <Button
          type={isActive("all")}
          size="large"
          onClick={() => changeFilter("all")}
        >
          All
        </Button>
        <Button
          type={isActive("active")}
          size="large"
          onClick={() => changeFilter("active")}
        >
          Active
        </Button>
        <Button
          type={isActive("done")}
          size="large"
          onClick={() => changeFilter("done")}
        >
          Completed
        </Button>
      </Button.Group>
    </div>
  );
};

export default Footer;
