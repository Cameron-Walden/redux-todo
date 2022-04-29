import CompletedTodos from "./components/CompletedTodos";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

const App = () => {

  return (
    <>
    <h1>Todos:</h1>
    <TodoForm />
    <Todos />
    <CompletedTodos />
    </>
  )
}

export default App;
