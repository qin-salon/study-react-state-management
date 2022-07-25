import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Layout } from "src/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
