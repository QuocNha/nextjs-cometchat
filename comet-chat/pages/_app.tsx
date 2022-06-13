import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Chat } from './chat';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Chat {...pageProps} />;
}

export default MyApp;
