import { useMachine } from "@xstate/react";
import type { AppProps } from "next/app";
import { useCallback } from "react";
import { Layout } from "src/components/Layout";
import { todosMachine } from "src/state/todos";
import { Todo } from "src/types";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [state, send] = useMachine(todosMachine);

  const addTodo = useCallback(
    (text: string) => {
      send("ADD_TODO", { text });
    },
    [send]
  );

  const toggleTodo = useCallback(
    (todo: Todo) => {
      send("TOGGLE_TODO", { todo });
    },
    [send]
  );

  return (
    <Layout todoCount={state.context.todos.length}>
      <Component
        {...pageProps}
        todos={state.context.todos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
      />
    </Layout>
  );
}
