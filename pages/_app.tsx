import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";

import { loadQuery, RelayEnvironmentProvider } from "react-relay/hooks";
import relayEnvironment from "../utils/relayEnvironment";
import { graphql } from "relay-runtime";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <Component {...pageProps} />
      </RelayEnvironmentProvider>
    </>
  );
}

export default MyApp;
