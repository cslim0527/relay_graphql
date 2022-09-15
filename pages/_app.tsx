import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";

import { RelayEnvironmentProvider } from "react-relay/hooks";
import relayEnvironment from "../utils/relayEnvironment";

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
