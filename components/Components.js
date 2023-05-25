
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, removeAllTodos} from '../redux/actions';
import { getTodos, getCompletedTodos, getIncompleteTodos} from '../redux/selectors';
import { useState } from 'react';


export default function Component () {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);
  const [text, setText] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!text) return;
    dispatch(addTodo(text));
    setText('');
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDeleteAllTodos = () => {
    dispatch(removeAllTodos());
  };

  return (
    <>
    <div className='container'>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button className='delete-btn' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Completed: {completedTodos.length}</p>
      <p>Incomplete: {incompleteTodos.length}</p>
      <button className='btn-delete-all' onClick={handleDeleteAllTodos}>Delete All</button>
      </div>
    </>
  );
};

