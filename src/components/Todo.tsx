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
  const { id, title, completed } = todo;
  /*------------Helpers--------------*/

  /*------------checkbox--------------*/
  const changeHandler = () =>
    updateHandler(id, { ...todo, completed: !completed });
  /*------------checkbox--------------*/

  return (
    <>
      <li className="todoes__todo">
        <input
          type="checkbox"
          id={`todo-${id}`}
          className="todoes__todo--checkbox"
          checked={completed}
          onChange={changeHandler}
        />
        <label htmlFor={`todo-${id}`}></label>
        <label htmlFor={`todo-${id}`} className="todoes__todo--label">
          {title}
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
            onClick={() => deleteHandler(id)}
          />
        </div>
      </li>
      {isShown ? <Modal setIsShown={setIsShown} /> : null}
    </>
  );
};

export default Todo;
