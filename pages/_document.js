import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <meta name="description" content="My portfolio" />
          <link rel="icon" href="/favicon.png" />
          <link href="https://api.fontshare.com/css?f[]=nippo@500&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
