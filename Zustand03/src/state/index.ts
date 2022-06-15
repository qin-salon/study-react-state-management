import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { State } from "./types";
import { createTodosSlice } from "./todos";
import { createUsersSlice } from "./users";

export const useStore = create<State>()(
  devtools(
    immer((...args) => {
      return {
        ...createTodosSlice(...args),
        ...createUsersSlice(...args),
      };
    })
  )
);
