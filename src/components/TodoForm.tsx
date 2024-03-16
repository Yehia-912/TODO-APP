interface IProps {}

// eslint-disable-next-line no-empty-pattern
const TodoForm = ({}: IProps) => {
  return (
    <form className="todo__form">
      <div className="todo__form--wrapper">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="todo__form--input"
        />
        <button type="submit" className="todo__form--button">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
