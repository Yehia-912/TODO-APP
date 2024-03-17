import { useState } from "react";

import TodoForm from "./TodoForm";
import Todoes from "./Todoes";
import { dummyTodoes } from "../data";
import { ITodo } from "../interfaces";
interface IProps {}
//eslint-disable-next-line
const TodoApp = ({}: IProps) => {
  const [todoes, setTodoes] = useState<ITodo[]>(dummyTodoes);

  /*------------Create--------------*/
  const createHandler = (newTodo: ITodo) =>
    setTodoes((prev) => [newTodo, ...prev]);
  /*------------Create--------------*/

  /*------------Update--------------*/
  const updateHandler = (id: string, newTodo: ITodo) =>
    setTodoes((prev) => prev.map((todo) => (todo.id == id ? newTodo : todo)));
  /*------------Update--------------*/

  /*------------Delete--------------*/
  const deleteHandler = (id: string) =>
    setTodoes((prev) => prev.filter((todo) => todo.id !== id));
  /*------------Delete--------------*/
  return (
    <div className="todo__main--wrapper">
      <div className="wrapper">
        <TodoForm createHandler={createHandler} />
        <Todoes
          todoes={todoes}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </div>
  );
};

export default TodoApp;
