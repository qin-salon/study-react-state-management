import { ReactNode, VFC } from "react";
import { Header } from "src/components/Header";
import { User } from "src/types";

export const Layout: VFC<{ children: ReactNode; user: User }> = ({
  children,
  user,
}) => {
  return (
    <div>
      <Header user={user} />
      <main>{children}</main>
    </div>
  );
};
