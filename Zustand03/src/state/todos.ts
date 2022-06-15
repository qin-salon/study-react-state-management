import { Todo } from "src/types";
import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

type State = {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
};

export const useStore = create<State>()(
  devtools(
    immer((set) => ({
      todos: TODOS,
      addTodo: (text) => {
        set(
          (state) => {
            state.todos.push({
              id: state.todos.length + 1,
              text,
              isDone: false,
            });
          },
          false,
          "todos/addTodo"
        );
      },
      toggleTodo: (id) => {
        set(
          (state) => {
            state.todos.forEach((todo) => {
              if (todo.id === id) {
                todo.isDone = !todo.isDone;
              }
            });
          },
          false,
          "todos/toggleTodo"
        );
      },
    }))
  )
);
