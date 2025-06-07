'use client';
import { useState } from 'react';
export default function AddTodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
