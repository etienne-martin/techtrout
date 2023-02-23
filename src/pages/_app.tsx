import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-wrap-balancer";

import { Layout } from "../components/layout/layout.component";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
