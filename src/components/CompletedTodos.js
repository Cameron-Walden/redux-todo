import React from "react";
import { useSelector } from "react-redux";

const CompletedTodos = () => {
  const totalCompletedTodos = useSelector((state) => state.todos.filter(todo => todo.completed === true))

  return <h3>Total Complete Items: {totalCompletedTodos.length}</h3>;
};

export default CompletedTodos;