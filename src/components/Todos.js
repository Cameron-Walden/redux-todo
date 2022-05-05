import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompletedTodos } from "../redux/todosSlice";
import { deleteTodo } from "../redux/todosSlice";

const Todos = ({ _id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompletedTodos = () => {
    dispatch(toggleCompletedTodos({ _id: _id, completed: !completed }));
  };

  const handleDeleteTodos = () => {
    dispatch(deleteTodo({ _id: _id }));
  };

  return (
    <>
      <span>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompletedTodos}
        ></input>
        {title}
      </span>
      <button onClick={handleDeleteTodos}>delete todo</button>
    </>
  );
};

export default Todos;
