import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Layout } from "src/components/Layout";
import { User } from "src/types";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Layout user={user}>
      <Component {...pageProps} user={user} />
    </Layout>
  );
}

export default MyApp;
