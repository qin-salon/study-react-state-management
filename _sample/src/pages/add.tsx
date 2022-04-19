import type { NextPage } from "next";
import { ComponentProps } from "react";
import { Todo } from "src/types";

type Props = {
  addTodo: (text: Todo["text"]) => void;
};

const Edit: NextPage<Props> = ({ addTodo }) => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    addTodo(text);
    e.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Edit;
