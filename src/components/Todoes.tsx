import Todo from "./Todo";
import TodoActions from "./TodoActions";
import { ITodo } from "../interfaces";

interface IProps {
  todoes: ITodo[];
  updateHandler: (id: string, newTodo: ITodo) => void;
}

const Todoes = ({ todoes, updateHandler }: IProps) => {
  /*------------render todoes--------------*/
  const renderTodoes = todoes.map((todo) => (
    <Todo key={todo.id} updateHandler={updateHandler} todo={todo} />
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
