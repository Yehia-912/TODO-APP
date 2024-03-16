import { useState } from "react";

import TodoForm from "./TodoForm";
import Todoes from "./Todoes";
import { dummyTodoes } from "../data";
import { ITodo } from "../interfaces";
interface IProps {}
//eslint-disable-next-line
const TodoApp = ({}: IProps) => {
  const [todoes, setTodoes] = useState<ITodo[]>(dummyTodoes);

  /*------------handlers--------------*/
  const updateHandler = (id: string, newTodo: ITodo) => {
    const newTodoes = todoes.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...newTodo };
      }
      return todo;
    });
    setTodoes(newTodoes);
  };
  /*------------handlers--------------*/
  return (
    <div className="todo__main--wrapper">
      <div className="wrapper">
        <TodoForm />
        <Todoes todoes={todoes} updateHandler={updateHandler} />
      </div>
    </div>
  );
};

export default TodoApp;
