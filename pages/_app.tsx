import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollProgressBar from "@/components/ScrollProgressBar";
import {GlobalLoader, LoadingProvider} from '@/components/Loading';
import BackToTopButton from '@/components/BackToTopButton';

function MyApp({ Component, pageProps }: AppProps) {
    return <><LoadingProvider><ScrollProgressBar /><Component {...pageProps} /><BackToTopButton /><GlobalLoader /></LoadingProvider></>
}

export default MyApp