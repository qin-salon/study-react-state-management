import { Todo } from "src/types";
import { createMachine, assign } from "xstate";

type TodosContext = { todos: Todo[] };

type TodosEvent =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; todo: Todo };

export const todosMachine = createMachine<TodosContext, TodosEvent>({
  context: {
    todos: [
      { id: 1, text: "foo", isDone: false },
      { id: 2, text: "bar", isDone: true },
    ],
  },
  on: {
    TOGGLE_TODO: {
      actions: assign({
        todos: (context, event) => {
          return context.todos.map((todo) => {
            return todo.id === event.todo.id
              ? { ...todo, isDone: !todo.isDone }
              : todo;
          });
        },
      }),
    },
    ADD_TODO: {
      actions: assign((context, event) => {
        const newTodo = {
          id: context.todos.length + 1,
          text: event.text,
          isDone: false,
        };
        return {
          todos: [...context.todos, newTodo],
        };
      }),
    },
  },
});
