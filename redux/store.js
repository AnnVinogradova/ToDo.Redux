import { createStore } from 'redux';

// import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions.js';

const initialState = {
  todos: []
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, { id: Date.now(), text: action.payload.text, completed: false }]
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)});
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return Object.assign({}, todo, { completed: !todo.completed });
          }
          return todo;
        })});
    default:
      return state;
  }
}

export const store = createStore(counterReducer);

// // create a makeStore function
// const makeStore = context => createStore(reducer);

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, {debug: true});
