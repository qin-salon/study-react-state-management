import { atom, selector } from "recoil";
import { Todo } from "src/types";

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ],
});

export const todosLengthState = selector({
  key: "todosLengthState",
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.length;
  },
});
