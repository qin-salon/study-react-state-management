import { Todo } from "src/types";
import { proxy } from "valtio";

export const store = proxy<{ todos: Todo[] }>({
  todos: [
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ],
});

export const toggleIsDone = (id: Todo["id"]) => {
  store.todos.forEach((todo) => {
    if (todo.id === id) {
      todo.isDone = !todo.isDone;
    }
  });
};

export const addTodo = (text: Todo["text"]) => {
  store.todos.push({ id: store.todos.length + 1, text, isDone: false });
};
