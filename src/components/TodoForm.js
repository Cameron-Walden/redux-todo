import React, { useState } from "react";
//allows us to use dispatched actions
import { useDispatch } from "react-redux";
//importing action we want to dispatch
import { addTodo } from "../redux/todosSlice";


const TodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
	//dispatching action, pass in payload which is the todos title
    dispatch(addTodo({ title: value }));

    console.log(value, "<== this is value inside TodoForm");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Assigned To:</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="your todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
