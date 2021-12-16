import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import { HeadTag } from '../components/headTag'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="content">
      <HeadTag />
      <Header />
      <Component {...pageProps} />
      <Footer className="footer" />
    </div>
  );
}

export default MyApp
