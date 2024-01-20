# HYF React 1

## Overview of the class

### Week 1

1. **What is React and why should we bother?**
2. **Components**

- What are components?
- No more HTML: how to write layouts.

3. **Create React App**

- What do you need to create a React app?
- How to get started.

4. **Architecture - make components talk to each other**

- hierarchy
- properties

### Week 2

1. **React components lifecycle**
2. **Hooks**
3. **State**
4. **Effects**

### Week 3

1. **Using the effects**

- Controlled inputs
- Data fetching

2. **Callback functions**

- Calling a function from child to parent

---

# What is React?

![React meme](https://i.imgflip.com/2kuh6f.jpg)

React JS is a JavaScript library developed and maintained by Meta (Facebook).

**Here is your new best friend, [the React website and docs](https://react.dev/).**

## Why should you care?

Using React as a library is an industry standard.

Source: [State of JS 2022](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)

# Components

## What are components?

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

**Excercise**: Let's componentize!

## No more HTML: introducing JSX

[How to write in JSX](https://react.dev/learn)

### Wait, another programming language...?

Nope. JSX is JavaScript made usable. JSX code is [transpiled](https://babeljs.io/repl) to JavaScript the browser can undestand.

# Create a React app

## What do you need?

1. Access to React library.
2. Ability to write modular JavaScript code.
3. Sensible transpiler to combine the modules AND translate JSX to JS.
4. Some script to run constant checks and transpile the code whenever you make changes.

## How to get started?

Don't reinvent the wheel, type "create react app" into search engine.

[create-react-app docs](https://create-react-app.dev/)

**Excercise**: Create a React app and cleanup the code. You app should be displaying only an `h1` with your name in it.

# Architecture 1.0

## Hierarchy

- parent vs child

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

# Effects

What are effect? Let's check out the [docs](https://react.dev/learn/lifecycle-of-reactive-effects)!

[Excercise](https://github.com/HackYourFuture-CPH/React/blob/main/react1/week2/lesson-plan.md#exercise)

You can use effects to listen for updates of props!

# Using the effects

## Controlled inputs

In HTML you were using the forms and form inputs to be able to provide and submit values via UI. You still can do that [in React](https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form).

In React the usage of `input` can be more flexible, but giving you way more controll on whatever happens on the screen.

Let's check out [the docs](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable) and see how that works!

**Excercise: add an input for your todo list and be able to add new todo items to your todo list.**

## Fetching data

In _real world_ data is not going to be hardcoded in your frontend code. It's going to come from _somewhere_ and in the frontend you are going to be getting to it via **API calls**.

![](https://project-static-assets.s3.amazonaws.com/APISpreadsheets/APIMemes/ServersCooksExample.jpeg)

Just like in the meme, you will have to wait until the backend _prepares_ the data on the **request** and for the frontend to _receive_ the **response**.

To do this, we are going to use the `useEffect`!

**[Here](https://rapidapi.com/guides/fetch-api-react)** is a bunch of recipes how to do that.

### User feedback

Make sure to display some sort of feedback to the user on:

- waiting for the request
- successful request
- errors

All of these are very important. All of these steps can be handled during the `fetch` promise progresses via `useState` hook.

**Excercise: fetch items via API from [this excercise](https://github.com/HackYourFuture-CPH/React/blob/main/react1/week3/lesson-plan.md#time-registration) and `console.log` them out, as well as the progress messages.**

# Callback functions

We know that we can pass properties down the chain, from parent to child.

How can we pass information from the child to the parent?

We can use **callback functions** for that! We pass them just like any other props.

[Here](https://stackoverflow.com/a/60315004) is how we do it.

**Excercise: make a delete button next to your todo. On click, make sure the list updates with the clicked item removed.**
