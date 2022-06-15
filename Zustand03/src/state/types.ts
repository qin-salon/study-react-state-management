import { Todo } from "src/types";

export type TodosState = {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
};

export type UsersState = {
  users: any[]; // 本来はAPIの返り値の型を入れるべき
  fetchUsers: () => Promise<void>;
};

export type State = TodosState & UsersState;
