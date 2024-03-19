import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { ITodo } from "../interfaces";

interface IProps {
  updateHandler: (id: string, newTodo: ITodo) => void;
  setIsShown: (val: boolean) => void;
  todo: ITodo;
}

const Modal = ({ setIsShown, updateHandler, todo }: IProps) => {
  const [title, setTitle] = useState("");

  /*------------Title--------------*/
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };
  /*------------Title--------------*/
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) return;
    updateHandler(todo.id, { ...todo, title });

    setIsShown(false);
  };
  return (
    <>
      <div className="overlay">
        <div
          className="edit-form__wrapper"
          onClick={() => {
            setIsShown(false);
          }}
        >
          <form
            className="todo__form modal"
            onSubmit={submitHandler}
            onClick={(e: MouseEvent<HTMLFormElement>) => {
              e.stopPropagation();
            }}
          >
            <div className="todo__form--wrapper">
              <input
                type="text"
                placeholder="Write your title..."
                className="todo__form--input"
                value={title}
                onChange={changeHandler}
              />
              <button type="submit" className="todo__form--button">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
