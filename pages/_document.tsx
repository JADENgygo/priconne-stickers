import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import nookies from "nookies";

class MyDocument extends Document {
  static theme: string = "";

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const cookie = nookies.get(ctx);
    MyDocument.theme = cookie.theme === "dark" ? "dark" : "light";
    if (cookie.theme === undefined) {
      nookies.set(ctx, "theme", "light", {
        maxAge: 60 * 60 * 24 * 30 * 12 * 1,
        path: "/"
      });
    }
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html className={MyDocument.theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="プリコネRのスタンプ集" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@JADENgygo" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="プリコネスタンプ" />
          <meta property="og:description" content="プリコネRのスタンプ集" />
          <meta property="og:url" content="https://priconne-stickers.vercel.app" />
          <meta property="og:image" content="https://priconne-stickers.vercel.app/img/card.webp" />
          <link rel="icon" href="/img/peko.png" />
        </Head>
        <body className={MyDocument.theme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
