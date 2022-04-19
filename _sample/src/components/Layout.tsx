import { ReactNode, VFC } from "react";
import { Header } from "src/components/Header";

export const Layout: VFC<{ children: ReactNode; todoCount: number }> = ({
  children,
  todoCount,
}) => {
  return (
    <div>
      <Header todoCount={todoCount} />
      <main>{children}</main>
    </div>
  );
};
