import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="en" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <meta name="theme-color" content="#330000" />
        <meta name="msapplication-navbutton-color" content="#330000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#330000" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/PJ9jh6M1/b.png"
        />
        <link
          rel="icon"
          href="https://i.postimg.cc/PJ9jh6M1/b.png"
          type="image/x-icon"
        />
        <meta name="og:email" content="info@belgravia.qa" />
        <meta name="og:phone_number" content="+97444445660" />
        <meta name="og:country-name" content="Qatar" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="London, British food, Risotto, Belgravia, Restaurant, Al Hazm, Cafes, Dessert, Modern restaurant, Cuisine, Outdoor restaurant, Nice terrace"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
