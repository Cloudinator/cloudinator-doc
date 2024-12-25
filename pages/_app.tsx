import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { GlobalLoader, LoadingProvider } from "@/components/Loading";
import MaintenanceBanner from "@/components/MaintenanceBanner";
import { Poppins } from "next/font/google";
import SnowfallToggleButton from "@/components/SnowfallToggleButton";
import FooterBanner from "@/components/FooterBanner";
import { Toaster } from "@/components/ui/toaster";
import HeaderNav from "@/components/HeaderNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={poppins.className}>
        <LoadingProvider>
          <MaintenanceBanner />
          <ScrollProgressBar />
          <HeaderNav /> 
          <Component {...pageProps} />
          <SnowfallToggleButton />
          <FooterBanner />
          <Toaster />
          <GlobalLoader />
        </LoadingProvider>
      </main>
    </>
  );
}

export default MyApp;
