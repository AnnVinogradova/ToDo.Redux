
export const ADD_TODO  = 'ADD_TODO';
export const DELETE_TODO  = 'DELETE_TODO';
export const TOGGLE_TODO  = 'TOGGLE_TODO';


export function addTask(delta){
  return {type: ADD_TODO, delta }
}

export function deleteTask(delta){
  return {type: DELETE_TODO, delta }
}

export function toggleTask(delta){
  return {type: TOGGLE_TODO, delta }
}
