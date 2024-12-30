import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { GlobalLoader, LoadingProvider } from "@/components/Loading";
// import MaintenanceBanner from "@/components/MaintenanceBanner";
import { Poppins } from "next/font/google";
import SnowfallToggleButton from "@/components/SnowfallToggleButton";
import FooterBanner2 from "@/components/FooterBanner2";
import { Toaster } from "@/components/ui/toaster";
import HeaderNav from "@/components/HeaderNav";
import NewYearCountdownBanner from "@/components/NewYearCountdownBanner";
import { ThemeProvider } from "next-themes";

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
        <main className={poppins.className}>
          <LoadingProvider>
            {/* <MaintenanceBanner /> */}
            <NewYearCountdownBanner />
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
