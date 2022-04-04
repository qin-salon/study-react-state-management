import type { NextPage } from "next";
import { useState } from "react";

const Edit: NextPage = () => {
  const [name, setName] = useState("しまぶー");
  const [image, setImage] = useState("shimabu");

  return (
    <div>
      <h2>プロフィール編集</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await fetch("/api/update", {
            method: "POST",
            body: JSON.stringify({ name, image }),
          });
          const json = await res.json();
          console.log(json);
        }}
      >
        <label htmlFor="image">画像</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          autoComplete="off"
        />

        <label htmlFor="name">名前</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />

        <button>変更</button>
      </form>
    </div>
  );
};

export default Edit;
