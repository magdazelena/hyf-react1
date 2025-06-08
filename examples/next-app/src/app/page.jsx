'use client';
import { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import styles from './page.module.css';
import { Button } from '@/components/Button';
import Card from '@/components/Card';

import ToggleContent from '@/components/ToggleContent';
export default function HomePage() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build ToDo App', done: false },
  ]);

  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleToggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const content = '';

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <h1>My ToDo List</h1> */}
        {/* <AddTodoForm onAdd={handleAddTodo} />
        <TodoList todos={todos} onToggle={handleToggleTodo} /> */}
        <Button text="Hello there" onClick={() => alert('Hi')}/>

        {todos.length 
        ? <Card title={todos.length} description="items in the list" />
        : <p>No items to do, congrats!</p>}

        <ToggleContent  content={content} />

      </main>
    </div>
  );
}
