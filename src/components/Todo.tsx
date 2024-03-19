import { RxCross1, RxPencil2 } from "react-icons/rx";

import { ITodo } from "../interfaces";
import { useState } from "react";
import Modal from "./Modal";

const ICONSTYLE = { color: "#494C6B", cursor: "pointer" };
const ICONSIZE = 16;

interface IProps {
  todo: ITodo;
  updateHandler: (id: string, newTodo: ITodo) => void;
  deleteHandler: (id: string) => void;
}

const Todo = (props: IProps) => {
  /*------------states--------------*/
  const [isShown, setIsShown] = useState(false);
  /*------------states--------------*/

  /*------------Helpers--------------*/
  const { todo, updateHandler, deleteHandler } = props;

  /*------------Helpers--------------*/

  /*------------checkbox--------------*/
  const changeHandler = () =>
    updateHandler(todo.id, { ...todo, completed: !todo.completed });
  /*------------checkbox--------------*/

  return (
    <>
      <li className="todoes__todo">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          className="todoes__todo--checkbox"
          checked={todo.completed}
          onChange={changeHandler}
        />
        <label htmlFor={`todo-${todo.id}`}></label>
        <label htmlFor={`todo-${todo.id}`} className="todoes__todo--label">
          {todo.title}
        </label>

        <div className="icons__wrapper">
          <RxPencil2
            style={ICONSTYLE}
            size={ICONSIZE}
            onClick={() => setIsShown(true)}
          />
          <RxCross1
            style={ICONSTYLE}
            size={ICONSIZE}
            onClick={() => deleteHandler(todo.id)}
          />
        </div>
      </li>
      {isShown ? (
        <Modal
          setIsShown={setIsShown}
          updateHandler={updateHandler}
          todo={todo}
        />
      ) : null}
    </>
  );
};

export default Todo;
