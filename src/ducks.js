
const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
let nextTodoId = 0;

//actions
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//reducers

//action creators
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    completed: false,
    text
  };
}
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
