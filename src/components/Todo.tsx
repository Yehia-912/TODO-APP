interface IProps {}
//eslint-disable-next-line
const Todo = ({}: IProps) => {
  return (
    <>
      <li className="todoes__todo">
        <input type="checkbox" id="com" className="todoes__todo--checkbox" />
        <label htmlFor="com"></label>
        <label htmlFor="com" className="todoes__todo--label">
          Complete online JavaScript course
        </label>
      </li>
      <li className="todoes__todo">
        <input type="checkbox" id="com" className="todoes__todo--checkbox" />
        <label htmlFor="com"></label>
        <label htmlFor="com" className="todoes__todo--label">
          10 minutes meditation
        </label>
      </li>
    </>
  );
};

export default Todo;
