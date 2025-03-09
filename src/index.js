import React from "react";
import ReactDOM from "react-dom/client";
import AlohaDashboard from "./components/AlohaDashboard/AlohaDashboard";
import TodoList from "./components/Todolist/TodoList";
import Scene from "./components/Scene/Scene";
import Counter from "./components/Counter/Counter";
import CounterParent from "./components/Counter/CounterParent";
import UserList from "./components/UserList/UserList";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserList />);
