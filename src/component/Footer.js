import React from 'react';

const Footer = ({ todos, changeFilter }) => {
	const result = todos.filter((todo) => !todo.isCompleted);
	const message = () => {
		if (todos.length > 0) {
			if (result.length > 0) {
				return <div>{result.length} item left to do</div>;
			} else {
				return <div>All item left to do</div>;
			}
		} else {
			return <div>No item to do</div>;
		}
	};

	return (
		<div>
			<hr />
			<div> {message()}</div>
			<button onClick={() => changeFilter('all')}>All</button>
			<button onClick={() => changeFilter('active')}>Active</button>
			<button onClick={() => changeFilter('done')}>Completed</button>
		</div>
	);
};

export default Footer;