export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_TODO  = 'ADD_TODO';
export const DELETE_TODO  = 'DELETE_TODO';
export const TOGGLE_TODO  = 'TOGGLE_TODO';

export function increment() {
  return { type: INCREMENT };
}
export function decrement() {
  return { type: DECREMENT };
}

export function addTodo(delta){
  return {type: ADD_TODO, delta }
}

export function deleteTodo(delta){
  return {type: DELETE_TODO, delta }
}

export function toggleTodo(delta){
  return {type: TOGGLE_TODO, delta }
}
