const initialState = [
  {
    id: 1,
    text: 'Make state',
    done: false
  },
  {
    id: 2,
    text: 'Make form',
    done: false
  },
  {
    id: 3,
    text: 'Make this app',
    done: true
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
