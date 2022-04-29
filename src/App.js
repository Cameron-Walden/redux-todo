import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CompletedTodos from "./components/CompletedTodos";

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <TodoForm />
      <TodoList />
      <CompletedTodos />
    </div>
  );
};

export default App;
