import Head from 'next/head'

export const HeadTag = () => {
  return (
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-M7HGQ5Q4Z3"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M7HGQ5Q4Z3');
        `
      }} />
      <title>プリコネスタンプ</title>
      <meta charSet="utf-8" />
      <meta name="description" content="プリコネRのスタンプ集" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@JADENgygo" />
      <meta property="og:url" content="https://priconne-stickers.vercel.app" />
      <meta property="og:title" content="プリコネスタンプ" />
      <meta property="og:description" content="プリコネRのスタンプ集" />
      <meta property="og:image" content="https://priconne-stickers.vercel.app/img/peko.png" />
      <link rel="icon" href="/img/peko.png" />
    </Head>
  );
};
