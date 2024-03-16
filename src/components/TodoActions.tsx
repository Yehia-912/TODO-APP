interface IProps {}
//eslint-disable-next-line
const TodoActions = ({}: IProps) => {
  return (
    <div className="todoes__actions">
      <span className="todoes__actions--left">5 items left</span>
      <button className="todoes__actions--clear">Clear complete</button>
    </div>
  );
};

export default TodoActions;
