'use client';
import { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import styles from './page.module.css';
import { Button } from '@/components/Button';
import Card from '@/components/Card';

import ToggleContent from '@/components/ToggleContent';


// export const HomePage2 = () => {}
export default function HomePage() {
  
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build ToDo App', done: false },
  ]);

  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }
  
  function decrement() {
    setNumber(prevNumber => prevNumber > 0 ? prevNumber - 1 : 0);
  }
  
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


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>My ToDo List</h1> */
        <AddTodoForm onAdd={handleAddTodo} />
        <TodoList todos={todos} onToggle={handleToggleTodo} />
        {/* <Button text="Hello there" onClick={() => alert('Hi')}/>

        {todos.length 
        ? <Card title={todos.length} description="items in the list" />
        : <p>No items to do, congrats!</p>}

        <ToggleContent  content={content} /> */}
        {/* <Button text="Hello there" onClick={() => updateState({id: 3, text: 'something'})}/>
        {todos.map(todo => (<p key={todo.id}>{todo.text}</p>))} */}

        <div>
          <h1>Value: {number}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>

      </main>
    </div>
  );
}
