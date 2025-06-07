
# Part 1: Properties

### What are Props?

* Props = arguments passed to components
* Allow components to be **reusable** and **dynamic**
* Think of props like **function parameters**
* Props are **read-only** (never modify inside a component)

📌 Example:

```jsx
function TodoItem(props) {
  return <li>{props.text}</li>;
}
```

You can pass different `text` to render multiple items.

---

### Passing and Reading Props

✅ **How to pass props:**

```jsx
<TodoItem text="Buy milk" />
<TodoItem text="Clean room" />
```

✅ **How to read props - Method 1: `props.x`**

```jsx
function TodoItem(props) {
  return <li>{props.text}</li>;
}
```

✅ **Method 2: Destructuring**

```jsx
function TodoItem({ text }) {
  return <li>{text}</li>;
}
```

✅ **Forwarding props (spread syntax):**

```jsx
function Wrapper(props) {
  return <TodoItem {...props} />;
}

<Wrapper text="Buy bread" />
```

---

### Using `children` Props 

* `children` is a special prop for nested content
* Used for **wrapper** or **layout** components

📌 Example:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <TodoItem text="Walk dog" />
</Card>
```

---

### Conditional Rendering 

✅ **Using if/else inside component**

```jsx
function TodoItem({ text, done }) {
  if (done) {
    return <li style={{ textDecoration: "line-through" }}>{text}</li>;
  }
  return <li>{text}</li>;
}
```

✅ **Using ternary operator**

```jsx
<li>{done ? <s>{text}</s> : text}</li>
```

✅ **Using logical &&**

```jsx
{done && <span>✅</span>}
```

---
## Part 2: State

# React Components Lifecycle

AKA how does React actually work?

We learned about JSX and rendering HTML via JavaScript. This is just semantics, it is not why React is such an awesome tool used so widely.

React is great frontend tool because it is really fast and efficient.

How does it work under the hood? What [this video](https://www.youtube.com/watch?v=7YhdqIR2Yzo&ab_channel=PhilipFabianek) to find out.

Meanwhile, it is enough to say that React handles the memory of your components well. It does not just "hide" and "show" elements. React components are all subject to something called **lifecycle**. Via [React docs](https://react.dev/learn/lifecycle-of-reactive-effects):

> Every React component goes through the same lifecycle:
>
> - A component **mounts** when it’s added to the screen.
> - A component **updates** when it receives new props or state, usually in response to an interaction.
> - A component **unmounts** when it’s removed from the screen.

# Hooks

Functions and methods enabling use of React capabilities.

List of available hook is in the [docs](https://legacy.reactjs.org/docs/react-component.html)

# State


### What is State? 

* State is components memory.
* When changed, **causes re-render**
* State is local to the component.
* Changes of state will however influence the **children** of the component.
* Use when data is dynamic
* **Props vs State**:

  * Props: passed from parent, read-only
  * State: owned by component, changeable

Let's read more about the state from the [docs](https://react.dev/learn/state-a-components-memory).

---

### useState Hook Syntax

✅ **Declare state:**

```jsx
import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
}
```

* `useState([])` — default value
* `setTodos` — function to update state

---

### Updating State

✅ **Update array (add item):**

```jsx
setTodos([...todos, { text: "New task", done: false }]);
```

✅ **Update object:**

```jsx
const [user, setUser] = useState({ name: "Anna", age: 20 });

setUser({ ...user, age: 21 });
```

📌 Always use **spread syntax** to preserve old values.

---

### React Rendering Triggers

* Component re-renders when:

  * Props change
  * State changes via `setState` functions

✅ **Functional updates (recommended for consecutive state changes):**

```jsx
setCount(prev => prev + 1);
```

---

### Dynamically Rendering Content 

✅ **if/else, ternary, && already covered**

✅ **Render list using `.map()`**

```jsx
{todos.map((todo, index) => (
  <TodoItem key={index} text={todo.text} done={todo.done} />
))}
```

📌 Use `key` prop for performance

---

### Sharing State Between Components

✅ **Lifting state up:**

* Move shared state to **common parent**
* Pass data & set functions via props

📌 Example:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  return <TodoList todos={todos} />;
}
```

✅ **Pass callback to children**

* Pass callback to a child with a state updating function

📌 Example:

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (item) => setTodos(prev => [...prev, item]);

  return <>
        <TodoInput onAdd={addTodo}/>
        { todos.map(todo => <TodoItem key={todo.id} value={todo} />)}
     </>;
}

function TodoItem({ onUpdate }) {
    return <input type="text" onChange={onUpdate}/>
}
```


----
## Bonus
### Class vs functional components

You will find many examples using `class` keyword to describe React components. This is [outdated](https://legacy.reactjs.org/docs/react-component.html) approach.

We will however briefly take a [look at it](https://medium.com/@tgholami/react-function-components-lifecycle-8a6ede4b8c2e) so you are not surprised in the future.
