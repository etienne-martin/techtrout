import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Provider } from "react-wrap-balancer";

import { Layout } from "../components/layout/layout.component";
import { GOOGLE_ADSENSE_CLIENT, SITE_NAME, SLOGAN } from "../config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Head>
        <title>{`${SITE_NAME} — ${SLOGAN}`}</title>
        <link rel="icon" href="/icon.png" type="image/png" />
      </Head>
      <Layout>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
