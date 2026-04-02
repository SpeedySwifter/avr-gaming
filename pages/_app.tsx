import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/next";
import SEO from "../next-seo.config";

// Tailwind & Swiper Styles
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  );
}
