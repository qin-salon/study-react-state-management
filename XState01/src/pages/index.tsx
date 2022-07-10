import type { NextPage } from "next";
import { Todo } from "src/types";

type Props = {
  todos: Todo[];
  toggleTodo: (todo: Todo) => void;
};

const Home: NextPage<Props> = ({ todos, toggleTodo }) => {
  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleTodo(todo)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
