import '../styles/globals.css'
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
