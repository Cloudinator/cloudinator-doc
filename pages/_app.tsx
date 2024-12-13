import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollProgressBar from "@/components/ScrollProgressBar";
import {GlobalLoader, LoadingProvider} from '@/components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
    return <><LoadingProvider><ScrollProgressBar /><Component {...pageProps} /><GlobalLoader /></LoadingProvider></>
}

export default MyApp