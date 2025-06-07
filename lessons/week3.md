
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
