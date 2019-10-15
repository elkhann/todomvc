import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import searchTodo from './searchTodo';

export default combineReducers({
  todos,
  visibilityFilter,
  searchTodo
});
