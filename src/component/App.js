import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import SearchForm from './SeachForm';
import Footer from './Footer';

import { Layout } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Header, Content } = Layout;

const App = () => {
	const [ todos, setTodos ] = useState([
		{
			text: 'Make state',
			done: false
		},
		{
			text: 'Make form',
			done: false
		},
		{
			text: 'Make this app',
			done: true
		}
	]);
	const [ search, setSearch ] = useState('');
	const [ filter, setFilter ] = useState('all');

	const changeFilter = (filter) => {
		setFilter(filter);
	};

	const addTodo = (text) => {
		const newTodos = [ ...todos, { text, done: false } ];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos[index].done ? (newTodos[index].done = false) : (newTodos[index].done = true);

		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const searchTodo = (text) => {
		setSearch(text);
	};

	const searchTodos = (todos, search) => {
		if (search.length === 0) {
			return todos;
		}

		return todos.filter((todo) => {
			return todo.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
		});
	};

	const filterTodos = (todos, filter) => {
		switch (filter) {
			case 'all':
				return todos;
			case 'active':
				return todos.filter((todo) => !todo.done);
			case 'done':
				return todos.filter((todo) => todo.done);
			default:
				return todos;
		}
	};

	const visibleTodos = searchTodos(filterTodos(todos, filter), search);

	return (
		<Layout className="App">
			<Header theme="light" style={{ background: '#000' }}>
				<Title style={{ color: 'white', margin: 5 }}>todos {filter}</Title>
			</Header>

			<Content style={{ padding: '10px 10px' }}>
				<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
					<SearchForm searchTodo={searchTodo} />
					<TodoList todos={visibleTodos} removeTodo={removeTodo} completeTodo={completeTodo} />
					<TodoForm addTodo={addTodo} />
					<Footer todos={todos} changeFilter={changeFilter} />
				</div>
			</Content>
		</Layout>
	);
};

export default App;
