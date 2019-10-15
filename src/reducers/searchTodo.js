const searchTodo = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_FILTER':
      return action.search;

    default:
      return state;
  }
};

export default searchTodo;
