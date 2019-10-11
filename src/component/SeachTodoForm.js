import React, { useState } from "react";
import { Form, Input } from "antd";

const { Search } = Input;

const SearchForm = ({ searchTodo }) => {
  const [value, setValue] = useState("");

  const onSearch = value => {
    setValue(value);
    searchTodo(value);
  };

  return (
    <Form>
      <Search
        placeholder="What need to search?"
        defaultValue={value}
        enterButton="Search"
        size="large"
        onSearch={value => onSearch(value)}
      />
    </Form>
  );
};

export default SearchForm;
