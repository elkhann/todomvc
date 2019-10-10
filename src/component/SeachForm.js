import React, { useState } from 'react';

const SearchForm = ({ searchTodo }) => {
	const [ value, setValue ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		searchTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={value}
				placeholder="What need to search?"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>Search todo</button>
		</form>
	);
};

export default SearchForm;
