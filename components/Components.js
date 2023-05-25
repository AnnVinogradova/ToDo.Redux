
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../redux/actions';
import { getTodos, getCompletedTodos, getIncompleteTodos } from '../redux/selectors';

export default function Component () {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);
  const [text, setText] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!text) return;
    dispatch(addTodo(Date.now(), text));
    setText('');
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
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
            <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Completed: {completedTodos.length}</p>
      <p>Incomplete: {incompleteTodos.length}</p>
    </>
  );
};

