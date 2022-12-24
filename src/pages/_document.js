import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="https://www.pratikwadekar.me" />
        <meta
          property="og:image"
          content="https://i.ibb.co/6nNC918/Screenshot-2022-03-03-at-11-12-15-AM.png"
        />
        <meta
          property="og:description"
          content="Portfolio for Pratik Wadekar"
        />
        <meta property="og:url" content="https://www.pratikwadekar.me/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta charset="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Personal Portfolio for Pratik Wadekar"
        />
        <script
          src="https://kit.fontawesome.com/7f315885d3.js"
          crossorigin="anonymous"
        ></script>
        <title>pratikwadekar.me</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
