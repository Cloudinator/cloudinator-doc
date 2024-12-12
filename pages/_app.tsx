import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollProgressBar from "@/components/ScrollProgressBar";

function MyApp({ Component, pageProps }: AppProps) {
    return <><ScrollProgressBar /><Component {...pageProps} /></>
}

export default MyApp