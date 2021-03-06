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
import Offer from "../layouts/Offer";
import WelcomeForm from "../layouts/WelcomeForm";

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      <Navbar />
      <Loading />
      <Component {...pageProps} />
      <WhatsApp />
      <Call />
      <Offer /> 
      <WelcomeForm />
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
