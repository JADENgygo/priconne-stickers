import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
