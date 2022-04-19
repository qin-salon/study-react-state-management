import type { AppProps } from "next/app";
import { useState } from "react";
import { Layout } from "src/components/Layout";
import { Todo } from "src/types";

function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ]);

  const addTodo = (text: Todo["text"]) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: prevTodos.length + 1, text, isDone: false }];
    });
  };

  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return { ...todo, isDone: !todo.isDone };
      });
    });
  };

  return (
    <Layout todoCount={todos.length}>
      <Component
        {...pageProps}
        todos={todos}
        toggleIsDone={toggleIsDone}
        addTodo={addTodo}
      />
    </Layout>
  );
}

export default MyApp;
