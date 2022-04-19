import type { NextPage } from "next";
import { Todo } from "src/types";

type Props = {
  todos: Todo[];
  toggleIsDone: (id: Todo["id"]) => void;
};

const Index: NextPage<Props> = ({ todos, toggleIsDone }) => {
  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Index;
