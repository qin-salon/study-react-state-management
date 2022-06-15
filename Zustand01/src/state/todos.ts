import { Todo } from "src/types";
import create from "zustand";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

type State = {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
};

export const useStore = create<State>((set) => ({
  todos: TODOS,
  addTodo: (text) => {
    set((state) => {
      const newTodo = { id: state.todos.length + 1, text, isDone: false };
      return { todos: [...state.todos, newTodo] };
    });
  },
  toggleTodo: (id) => {
    set((state) => {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        }),
      };
    });
  },
}));
