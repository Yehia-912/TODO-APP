import { ChangeEvent, FormEvent, useState } from "react";

interface IProps {
  setIsShown: (val: boolean) => void;
}
//eslint-disable-next-line
const Modal = ({ setIsShown }: IProps) => {
  const [title, setTitle] = useState("");
  /*------------Title--------------*/
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };
  /*------------Title--------------*/
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsShown(false);
  };
  return (
    <>
      <div className="overlay"></div>
      <div className="edit-form__wrapper">
        <form className="todo__form modal" onSubmit={submitHandler}>
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
    </>
  );
};

export default Modal;
