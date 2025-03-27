import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import Counter from "./components/Counter/CounterParent";
import UserList from "./components/UserList/UserList";
import TodoList from "./components/TodoList/TodoList";
import AlohaDashboard from "./components/AlohaDashboard/AlohaDashboard";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='counter'>Go to Counter component</Link></li>
            <li><Link to='userlist'>Go to UserList component</Link></li>
            <li><Link to='todolist'>Go to TodoList component</Link></li>
            <li><Link to='alohaDashboard'>Go to AlohaDashboard component</Link></li>
    


            
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/alohaDashboard" element={<AlohaDashboard />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
SSR (server-side rendering) - додатки, які рендеряться на сервері

CSR (client-side rendering) - додатки, які рендеряться на клієнті
*/
