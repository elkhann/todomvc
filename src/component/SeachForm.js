import React, { useState } from 'react';
import { Row, Col, Form, Input } from 'antd';

const { Search } = Input;

const SearchForm = ({ searchTodo }) => {
	const [ value, setValue ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		searchTodo(value);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row gutter={12}>
				<Col span={12}>
					<Search
						placeholder="What need to search?"
						defaultValue={value}
						enterButton="Search"
						size="large"
						onSearch={(value) => setValue(value)}
					/>
				</Col>
			</Row>
		</Form>
	);
};

export default SearchForm;
