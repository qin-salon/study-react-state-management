import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Post } from "src/pages/api/posts";

const Index: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>記事リスト</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Index;
