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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
