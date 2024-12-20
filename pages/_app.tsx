import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { GlobalLoader, LoadingProvider } from "@/components/Loading";
import BackToTopButton from "@/components/BackToTopButton";
import MaintenanceBanner from "@/components/MaintenanceBanner";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadingProvider>
        <ScrollProgressBar />
        <MaintenanceBanner />
        <Component {...pageProps} />
        <BackToTopButton />
        <GlobalLoader />
      </LoadingProvider>
    </>
  );
}

export default MyApp;
