import { FC } from "react";
import { store } from "src/state/todo";
import { useSnapshot } from "valtio";

export const TodoCounter: FC = () => {
  const { todos } = useSnapshot(store);
  return <h2>TODO: {todos.length}件</h2>;
};
