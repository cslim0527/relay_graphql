import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";

/**
 * Github Token: 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
 * */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
