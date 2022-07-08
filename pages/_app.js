import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Script from "next/dist/client/script";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../layouts/Loading";
import { useEffect } from "react";
import WhatsApp from "../layouts/WhatsApp";
import Call from "../layouts/Call";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-left",
      duration: 600,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      disable: false,
    });
  }, []);
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#330000" />
        <meta name="msapplication-navbutton-color" content="#330000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#330000" />
        <meta property="og:image" content="https://i.postimg.cc/PJ9jh6M1/b.png" />
        <link rel="icon" href="https://i.postimg.cc/PJ9jh6M1/b.png" type="image/x-icon" />
        <meta name="og:email" content="info@belgravia.qa" />
        <meta name="og:phone_number" content="+97444445660" />
        <meta name="og:country-name" content="Qatar" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="London, British food, Risotto, Belgravia, Restaurant, Al Hazm, Cafes, Dessert, Modern restaurant, Cuisine, Outdoor restaurant, Nice terrace"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <Loading />
      <Component {...pageProps} />
      <WhatsApp />
      <Call />
      <Footer />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}

export default MyApp;
