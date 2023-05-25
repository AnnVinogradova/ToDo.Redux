import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, REMOVE_ALL_TODOS } from './actions';

const initialState = {
  todos: []
};

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
          return Object.assign({}, state, {
            todos: [...state.todos, { id: Date.now(), text: action.payload.text, completed: false }]
          });

        case DELETE_TODO:
            return Object.assign({}, state, {
              todos: state.todos.filter(todo => todo.id !== action.payload.id)
            });

        case TOGGLE_TODO:
          return Object.assign({}, state, {
            todos: state.todos.map(todo => {
              if (todo.id === action.payload.id) {
                return { ...todo, completed: !todo.completed };
              }
              return todo;
            })
          });

        case REMOVE_ALL_TODOS:
              return Object.assign({}, state, {
                todos: []
            });
      
        default:
          return state;
      }
    };


