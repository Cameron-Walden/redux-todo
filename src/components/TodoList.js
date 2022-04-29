import Todos from "./Todos";
//https://react-redux.js.org/api/hooks#useselector
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    // const todos = [
    //     {id: 1, title: 'task1', completed: false},
    //     {id: 2, title: 'task2', completed: false},
    //     {id: 3, title: 'task3', completed: false},
    //     {id: 4, title: 'task4', completed: false},
    //     {id: 5, title: 'task5', completed: false},
    // ];

    return (
        <>
        {todos.map(todo => <Todos id={todo.id} title={todo.title} completed={todo.completed}/>)}
        </>
    );
}

export default TodoList;