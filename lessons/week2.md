
## Properties

**Props** for short.

What are props for?
How to use props?

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

## Class vs functional components

You will find many examples using `class` keyword to describe React components. This is [outdated](https://legacy.reactjs.org/docs/react-component.html) approach.

We will however briefly take a [look at it](https://medium.com/@tgholami/react-function-components-lifecycle-8a6ede4b8c2e) so you are not surprised in the future.

# Hooks

Functions and methods enabling use of React capabilities.

List of available hook is in the [docs](https://legacy.reactjs.org/docs/react-component.html)

# State

State is components memory.

State is local to the component.

Changes of state will however influence the **children** of the component.

Let's read more about the state from the [docs](https://react.dev/learn/state-a-components-memory).

```
Excercise!

- Create a todo list (based on homework)
- Create a button adding an item to the todo list.
- Try to use state updating hook to append the item to the list on every button click.
```
