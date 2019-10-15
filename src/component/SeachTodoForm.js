import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchFilter } from '../actions';

import { Form, Input } from 'antd';
const { Search } = Input;

const SearchForm = ({ dispatch }) => {
  const [value, setValue] = useState('');

  const onSearch = value => {
    setValue(value);
    dispatch(searchFilter(value));
  };

  return (
    <Form>
      <Search
        placeholder='What need to search?'
        defaultValue={value}
        enterButton='Search'
        size='large'
        onSearch={value => onSearch(value)}
      />
    </Form>
  );
};

export default connect()(SearchForm);
