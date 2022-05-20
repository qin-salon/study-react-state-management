import { FC } from "react";
import { useTodos } from "src/state/todos";

export const TodoCounter: FC = () => {
  const todos = useTodos();
  return <h2>TODO: {todos.length}件</h2>;
};
