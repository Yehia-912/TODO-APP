import { RxCross1 } from "react-icons/rx";

import { ITodo } from "../interfaces";

interface IProps {
  todo: ITodo;
  updateHandler: (id: string, newTodo: ITodo) => void;
}
const ICONSTYLE = { color: "#494C6B", cursor: "pointer" };
const Todo = ({ todo, updateHandler }: IProps) => {
  const { id, title, completed } = todo;
  /*------------states--------------*/

  /*------------states--------------*/

  /*------------handle input:checkbox--------------*/
  const changeHandler = () =>
    updateHandler(id, { ...todo, completed: !completed });
  /*------------handle input:checkbox--------------*/

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
        <RxCross1 style={ICONSTYLE} />
      </li>
    </>
  );
};

export default Todo;
