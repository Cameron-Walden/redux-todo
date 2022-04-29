import React from "react";
import Todos from "./Todos";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos)

  return (
    <ul className="list-group">
      {todos.map((todo, idx) => (
        <Todos key ={idx} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
