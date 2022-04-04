import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
