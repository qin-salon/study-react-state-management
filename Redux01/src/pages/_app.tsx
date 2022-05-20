import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Layout } from "src/components/Layout";
import { store } from "src/state";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
