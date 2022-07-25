import Link from "next/link";
import { FC } from "react";
import { TodoCounter } from "./TodoCounter";

type Props = {
  todoCount: number;
};

export const Header: FC<Props> = ({ todoCount }) => {
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React状態管理</a>
          </Link>
        </h1>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
      </nav>

      <TodoCounter todoCount={todoCount} />
    </header>
  );
};
