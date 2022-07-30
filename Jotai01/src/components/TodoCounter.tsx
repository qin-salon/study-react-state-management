import { useAtom } from "jotai";
import { FC } from "react";
import { todosLengthAtom } from "src/state/todo";

export const TodoCounter: FC = () => {
  const [todosLength] = useAtom(todosLengthAtom);
  return <h2>TODO: {todosLength}件</h2>;
};
