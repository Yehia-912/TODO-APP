interface IProps {
  clearCompleteHandler: () => void;
  todoesLen: number;
}

const TodoActions = ({ clearCompleteHandler, todoesLen }: IProps) => {
  return (
    <div className="todoes__actions">
      <span className="todoes__actions--left">{todoesLen} items left</span>
      <button className="todoes__actions--clear" onClick={clearCompleteHandler}>
        Clear complete
      </button>
    </div>
  );
};

export default TodoActions;
