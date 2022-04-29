import { useState } from "react";
//allows us to use dispatched actions
import { useDispatch } from "react-redux";
//importing action we want to dispatch
import { addTodo } from "../redux/todosSlice";

const TodoForm = () => {
    //storing what the user types in
  const [value, setValue] = useState('');
  
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    //dispatching action, pass in payload which is the todos title
    dispatch(addTodo({ title: value }));
    console.log(value, "<== this is value inside of TodoForm");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Assigned To:</label>
      <input
        type="text"
        placeholder="your todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type='submit'>submit</button>
    </form>
  );
};

export default TodoForm;
