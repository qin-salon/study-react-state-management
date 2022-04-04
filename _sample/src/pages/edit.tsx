import type { NextPage } from "next";
import { useState } from "react";
import { User } from "src/types";

const Edit: NextPage<{ user: User }> = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [imageId, setImageId] = useState(user.imageId);

  return (
    <div>
      <h2>プロフィール編集</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await fetch("/api/update", {
            method: "POST",
            body: JSON.stringify({ name, imageId }),
          });
          const json = await res.json();
          console.log(json);
        }}
      >
        <label htmlFor="imageId">画像</label>
        <input
          type="text"
          id="imageId"
          name="imageId"
          value={imageId}
          onChange={(e) => setImageId(e.target.value)}
          autoComplete="off"
          required
        />

        <label htmlFor="name">名前</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          required
        />

        <button>変更</button>
      </form>
    </div>
  );
};

export default Edit;
