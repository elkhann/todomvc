let nextTodoId = 100;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const visibilityFilter = filter => ({
  type: 'VISIBILITY_FILTER',
  filter
});

export const searchFilter = search => ({
  type: 'SEARCH_FILTER',
  search
});
