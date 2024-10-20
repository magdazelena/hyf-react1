import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ToDoList } from "./pages/ToDoList";
import Employees from "./pages/Employees";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ToDoList /> */}
    <Employees />
  </React.StrictMode>
);
