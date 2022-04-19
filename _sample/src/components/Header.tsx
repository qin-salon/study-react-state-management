import Link from "next/link";
import { VFC } from "react";

export const Header: VFC<{ todoCount: number }> = ({ todoCount }) => {
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React 状態管理</a>
          </Link>
        </h1>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
      </nav>

      <div>
        <h2>TODO: {todoCount}件</h2>
      </div>
    </header>
  );
};
