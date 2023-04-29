import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Section from "../components/Section";
import Swip from "../components/Swip";
import ScrollDownBtn from "../components/ScrollDownBtn";
import WhatsApp from "../layouts/WhatsApp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Belgravia Restaurant</title>
        <meta
          name="description"
          content="A modern cuisine welcoming you all the way from London to Qatar"
        />
        <meta name="og:title" content="Belgravia Restaurant" />
        <meta
          name="og:description"
          content="A modern cuisine welcoming you all the way from London to Qatar"
        />
        <meta property="og:url" content="https://belgravia.qa/" />
      </Head>
      <header className={styles.headerHome}>
        <div className={styles.headerOverlay}></div>
        <div className="hello">
          <h1 data-aos="fade-up" data-aos-duration="300">
            Belgravia Restaurant welcomes you
          </h1>
          <p data-aos="fade-up" data-aos-duration="500">
            A modern cuisine welcoming you all the way from London to Qatar
          </p>
          <Link href="/reservation">
            <a
              data-aos="fade-up"
              data-aos-duration="700"
              className="btn btn-lg shadow rounded-pill"
            >
              Book a table
            </a>
          </Link>
          <ScrollDownBtn target="aboutSection" />
        </div>
      </header>
      <Section
        bg="bg-light"
        revers=" "
        frameP="left"
        HIM="HIM"
        aos="fade-right"
        api_url="http://44.208.45.254/api/website/about-us/"
        title="About us"
        btn="Read more about us"
        colimg="col-md"
        coltext="col-md"
        btnLink="/about"
        id="aboutSection"
        width={6}
        height={4}
      />
      <Section
        bg=" "
        revers="flex-row-reverse"
        frameP="right"
        HIM=" "
        aos="fade-left"
        api_url="http://44.208.45.254/api/website/reservation/"
        title="Reservation"
        btn="Book a table"
        colimg="col-md"
        coltext="col-md"
        btnLink="/reservation"
        width={6}
        height={4}
      />
      <Swip />
      <WhatsApp />
    </>
  );
}
