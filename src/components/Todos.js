import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/todosSlice";

const Todos = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCompleteTask = () => {
        dispatch(toggleComplete({ id: id, completed: !completed}))
    }

  return (
    <>
      <span>
        <input type="checkbox" checked={completed} onChange={handleCompleteTask}></input>
        {title}
      </span>
      <button>delete task</button>
    </>
  );
};

export default Todos;
