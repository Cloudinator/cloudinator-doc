import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { GlobalLoader, LoadingProvider } from "@/components/Loading";
import MaintenanceBanner from "@/components/MaintenanceBanner";
import { Poppins } from "next/font/google";
import SnowfallToggleButton from "@/components/SnowfallToggleButton";
import FooterBanner2 from "@/components/FooterBanner2";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import HeaderNav from "@/components/HeaderNav";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={poppins.className}>
          <LoadingProvider>
            <MaintenanceBanner />
            <ScrollProgressBar />
            <HeaderNav />
            <Component {...pageProps} />
            <SnowfallToggleButton />
            <FooterBanner2 />
            <Toaster />
            <GlobalLoader />
          </LoadingProvider>
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
