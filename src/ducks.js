//actions
const ADD_TODO = 'ADD_TODO';

//reducers

//action creators
let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    completed: false,
    text
  };
};
