import Todo from "./Todo";
import TodoActions from "./TodoActions";
import { ITodo } from "../interfaces";

interface IProps {
  todoes: ITodo[];
  updateHandler: (id: string, newTodo: ITodo) => void;
  deleteHandler: (id: string) => void;
}

const Todoes = ({ todoes, updateHandler, deleteHandler }: IProps) => {
  /*------------render todoes--------------*/
  const renderTodoes = todoes.map((todo) => (
    <Todo
      key={todo.id}
      updateHandler={updateHandler}
      deleteHandler={deleteHandler}
      todo={todo}
    />
  ));
  /*------------render todoes--------------*/

  return (
    <div className="todoes__wrapper">
      <ul className="todoes">{renderTodoes}</ul>
      <TodoActions />
    </div>
  );
};

export default Todoes;
