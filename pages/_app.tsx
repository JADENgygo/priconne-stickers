import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import { HeaderTag } from '../components/headerTag'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const content = useRef(null);

  const resize = (node: HTMLElement) => {
    if (!content.current) {
      return;
    }
    if (window.innerHeight < document.body.scrollHeight) {
      (content.current as HTMLElement).style.height = '100%';
      return;
    }
    const rect = node.getBoundingClientRect();
    (content.current as HTMLElement).style.height = (window.innerHeight - rect.height).toString() + 'px';
  };

  const hooterRef = useCallback(node => {
    if (window && node) {
      resize(node);
      window.addEventListener('resize', () => resize(node));
    }
  }, []);

  const router = useRouter();
  useEffect(() => {
    const f = () => window.dispatchEvent(new Event('resize'));
    router.events.on('routeChangeComplete', f);
    return () => router.events.off('routeChangeComplete', f)
  }, []);

  return (
    <div>
      <HeaderTag />
      <div ref={ content } className="pb-5">
        <Header />
        <Component {...pageProps} />
      </div>
      <div ref={ hooterRef }><Footer /></div>
    </div>
  )
}

export default MyApp
