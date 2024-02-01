import "@/styles/globals.css";
import type { AppProps } from "next/app";

import NextTopLoader from "nextjs-toploader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextTopLoader color="#dc2626" />
      <Component {...pageProps} />
    </>
  );
}
