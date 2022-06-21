import '../styles/globals.css'
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from '../layouts/Loading';
import { useEffect } from 'react'

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
      <Loading />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
