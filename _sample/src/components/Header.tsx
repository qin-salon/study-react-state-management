import Image from "next/image";
import Link from "next/link";

export const Header = () => {
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
          src={`https://api.multiavatar.com/shimabu.png`}
          alt="avatar"
          width={60}
          height={60}
        />
        <p>しまぶー</p>
      </div>
    </header>
  );
};
