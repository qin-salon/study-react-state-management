import Image from "next/image";
import Link from "next/link";
import { VFC } from "react";
import { User } from "src/types";

export const Header: VFC<{ user: User }> = ({ user }) => {
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React 状態管理</a>
          </Link>
        </h1>
        <Link href="/">
          <a>記事リスト</a>
        </Link>
        <Link href="/edit">
          <a>プロフィール編集</a>
        </Link>
      </nav>

      <div>
        <Image
          src={`https://api.multiavatar.com/${user.imageId}.png`}
          alt="avatar"
          width={100}
          height={100}
        />
        <p>{user.name}</p>
      </div>
    </header>
  );
};
