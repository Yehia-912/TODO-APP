import TodoForm from "./TodoForm";
import Todoes from "./Todoes";

const TodoApp = () => {
  return (
    <div className="todo__main--wrapper">
      <div className="wrapper">
        <TodoForm />
        <Todoes />
      </div>
    </div>
  );
};

export default TodoApp;
