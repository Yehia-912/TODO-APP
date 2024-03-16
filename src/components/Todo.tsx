interface IProps {}
//eslint-disable-next-line
const Todo = ({}: IProps) => {
  return (
    <li className="todoes__todo">
      <input type="radio" id="1" className="todoes__todo--checkbox" />
      <label htmlFor="1" className="todoes__todo--label">
        New task
      </label>
    </li>
  );
};

export default Todo;
