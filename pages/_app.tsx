import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

// Tailwind & Swiper Styles
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        {/* Verhindert Indexierung durch Suchmaschinen */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
