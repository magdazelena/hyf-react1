export default function TodoItem({ todo, onToggle }) {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{
        cursor: 'pointer',
        textDecoration: todo.done ? 'line-through' : 'none',
      }}
    >
      {todo.text}
    </li>
  );
}
