import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/todosSlice";
import { deleteTodo } from "../redux/todosSlice";

const Todos = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCompleteTodo = () => {
        dispatch(toggleComplete({ id: id, completed: !completed}))
    }

    const handleDeleteTodo = () => {
      dispatch(deleteTodo({ id: id }));
    }

  return (
    <>
      <span>
        <input type="checkbox" checked={completed} onChange={handleCompleteTodo}></input>
        {title}
      </span>
      <button onClick={handleDeleteTodo}>delete task</button>
    </>
  );
};

export default Todos;
