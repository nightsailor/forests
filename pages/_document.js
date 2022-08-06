import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link href="//fonts.googleapis.com/css?family=Open+Sans:700,600,400|Open+Sans+Condensed:300,700" 
          rel="stylesheet" type="text/css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}