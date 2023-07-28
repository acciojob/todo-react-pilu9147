
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1> My Todo List </h1>
        <TodoList/>
    </div>
  )
}

export default App