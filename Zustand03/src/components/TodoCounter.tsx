import { FC } from "react";
import { useStore } from "src/state";

export const TodoCounter: FC = () => {
  const todos = useStore((state) => state.todos);
  return <h2>TODO: {todos.length}件</h2>;
};
