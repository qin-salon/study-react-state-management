import { ReactNode, VFC } from "react";
import { Header } from "src/components/Header";

export const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
