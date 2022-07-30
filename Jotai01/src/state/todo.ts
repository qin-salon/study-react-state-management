import { atom } from "jotai";
import { selectAtom } from "jotai/utils";
import { Todo } from "src/types";

export const todosAtom = atom<Todo[]>([
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
]);

export const todosLengthAtom = selectAtom(todosAtom, (todos) => todos.length);

export const toggleTodoAtom = atom<Todo[], Pick<Todo, "id">>(
  (get) => get(todosAtom),
  (get, set, update) => {
    const prevTodos = get(todosAtom);
    const newTodos = prevTodos.map((todo) => {
      if (todo.id === update.id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    set(todosAtom, newTodos);
  }
);

export const addTodoAtom = atom<null, Pick<Todo, "text">>(
  null,
  (get, set, update) => {
    const prevTodos = get(todosAtom);
    const newTodo = {
      id: prevTodos.length + 1,
      text: update.text,
      isDone: false,
    };
    const newTodos = [...prevTodos, newTodo];
    set(todosAtom, newTodos);
  }
);
