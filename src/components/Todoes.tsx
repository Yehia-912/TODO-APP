import Todo from "./Todo";
import TodoActions from "./TodoActions";

interface IProps {}

// eslint-disable-next-line no-empty-pattern
const Todoes = ({}: IProps) => {
  return (
    <div className="todoes__wrapper">
      <ul className="todoes">
        <Todo />
      </ul>
      <TodoActions />
    </div>
  );
};

export default Todoes;
