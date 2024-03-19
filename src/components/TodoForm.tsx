import { ChangeEvent, FormEvent, useState } from "react";
import { ITodo } from "../interfaces";

interface IProps {
  createHandler: (newTodo: ITodo) => void;
}
//eslint-disable-next-line
const TodoForm = ({ createHandler }: IProps) => {
  const [title, setTitle] = useState("");
  /*------------Add todo--------------*/
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodo: ITodo = {
      id: String(Date.now()),
      title,
      completed: false,
    };
    createHandler(newTodo);
  };
  /*------------Add todo--------------*/

  /*------------Title--------------*/
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };
  /*------------Title--------------*/

  return (
    <form className="todo__form" onSubmit={addTodo}>
      <div className="todo__form--wrapper">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="todo__form--input"
          value={title}
          onChange={changeHandler}
        />
        <button type="submit" className="todo__form--button">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
