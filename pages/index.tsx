import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { pageLinks } from '../components/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M7HGQ5Q4Z3"></script>
        <script dangerouslySetInnerHTML={
          {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M7HGQ5Q4Z3');
            `
          }
        } />
        <title>プリコネスタンプ</title>
        <meta charSet="utf-8" />
        <meta name="description" content="プリコネRのスタンプ集" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JADENgygo" />
        <meta property="og:url" content="https://princess-connect-stickers.netlify.app" />
        <meta property="og:title" content="プリコネスタンプ" />
        <meta property="og:description" content="プリコネRのスタンプ集" />
        <meta property="og:image" content="https://princess-connect-stickers.netlify.app/img/clan_chat/peko.webp" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <div className="text-center">
      {
        pageLinks.map(value => (
            <div className="mb-3" key={ value.path }>
              <Link href={ value.path }><a>{ value.name }</a></Link>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Home
