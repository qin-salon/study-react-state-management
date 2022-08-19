import { FC } from "react";
import { fetcher } from "src/pages";
import { Todo } from "src/types";
import useSWR from "swr";

export const TodoCounter: FC = () => {
  const { data } = useSWR<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  return <h2>TODO: {data ? data.length : "-"}件</h2>;
};
