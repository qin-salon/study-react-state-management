import { Reducer } from "redux";
import { Todo } from "src/types";

// const
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// action
export const addTodo = (text: Todo["text"]) => {
  return { type: ADD_TODO, payload: { text } } as const;
};
export const toggleTodo = (id: Todo["id"]) => {
  return { type: TOGGLE_TODO, payload: { id } } as const;
};

type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

// initial state
const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// reducer
export const todosReducer: Reducer<Todo[], Action> = (
  prevState = TODOS,
  action
) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: prevState.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      const newState = [...prevState, newTodo];
      return newState;
    }
    case TOGGLE_TODO: {
      const newState = prevState.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      return newState;
    }
    default: {
      return prevState;
    }
  }
};
