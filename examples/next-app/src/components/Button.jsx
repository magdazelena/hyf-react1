export function Button({ onToggle, todo}) {
  return (
    <button
      onClick={onToggle}
    >
      {todo.done ? 'Undo' : 'Done'}
    </button>
  );
}
