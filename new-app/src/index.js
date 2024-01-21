import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToDoList } from "./pages/ToDoList";
import { Employees } from "./pages/Employees";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <ToDoList /> */}
    <Employees />
  </React.StrictMode>
);
