const searchTodo = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_FILTER':
      console.log('search filter', action.search);
      return action.search;

    default:
      return state;
  }
};

export default searchTodo;
