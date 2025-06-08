import { Button } from './Button';
export default function TodoItem(props) {
  const { todo, onToggle } = props;
  const { id, text, done } = todo;
  return (
    <li
      onClick={() => onToggle(id)}
      style={{
        cursor: 'pointer',
        textDecoration: done ? 'line-through' : 'none',
      }}
    >
      {text}
      {/* <Button onToggle={} todo={} /> */}
      <Button {...props} />
    </li>
  );
}
