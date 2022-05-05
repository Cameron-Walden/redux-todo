import React, { useEffect } from "react";
import Todos from "./Todos";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../redux/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

    // gets called when loaded first time, dispatches getTodos function which will grab all the todos and add to state
    useEffect(() => {
      dispatch(getTodos());
    }, [dispatch])

  return (
    <ul className="list-group">
      {todos.map((todo, idx) => (
        <Todos key ={idx} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
