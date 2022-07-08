import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Section from '../components/Section'
import hImg from '../public/images/out.jpg'
import hImg2 from '../public/images/bookt.jpg'
import Swip from '../components/Swip'
import ScrollDownBtn from "../components/ScrollDownBtn"
import WhatsApp from '../layouts/WhatsApp'

export default function Home() {
  return (
    <>
      <Head>
        <title>Belgravia Restaurant</title>
        <meta name="description" content="A modern cuisine welcoming you all the way from London to Qatar" />
        <meta name="og:title" content="Belgravia Restaurant" />
        <meta name="og:description" content="A modern cuisine welcoming you all the way from London to Qatar" />
        <meta property="og:url" content="https://belgravia.qa/" />
      </Head>
      <header className={styles.headerHome}>
        <div className={styles.headerOverlay}></div>
        <div className="hello">
          <h1 data-aos="fade-up" data-aos-duration="300">Belgravia Restaurant welcomes you</h1>
          <p data-aos="fade-up" data-aos-duration="500">A modern cuisine welcoming you all the way from London to Qatar</p>
          <Link href="/reservation">
            <a data-aos="fade-up" data-aos-duration="700" className="btn btn-lg shadow rounded-pill">Book a table</a>
          </Link>
          <ScrollDownBtn target="aboutSection" />
        </div>
      </header>
      <Section
        bg= "bg-light"
        revers= " "
        frameP= "left"
        HIM="HIM"
        aos="fade-right"
        img={hImg}
        imgalt = "belgravia"
        title= "About us"
        btn= "Read more about us"
        colimg= "col-md"
        coltext= "col-md"
        btnLink="/about"
        id="aboutSection"
        content="Belgravia Restaurant is a modern cuisine that offers different types of dishes coming from London with a European influence. The restaurant was founded by Sheikha Lulwa Al-Thani and The Executive Chef Mr. Omar Alawi. They worked together for 6 and a half years to build a new concept now known as “Belgravia Restaurant”. The reason behind choosing the name Belgravia is because people from the Middle East loved visiting and investing in the Belgravia Area in London. Belgravia is an affluent district in west London and is noted for its elite properties. The area takes its name from one of the dukes of the Westminster’s subsidiary titles, Viscount Belgrave, which is in turn derived from Belgravia, Cheshire, a village in the land belonging to the Duke."
        />
      <Section
        bg= " "
        revers= "flex-row-reverse"
        frameP= "right"
        HIM=" "
        aos="fade-left"
        img={hImg2}
        imgalt = "belgravia"
        title = "Reservation"
        btn= "Book a table"
        colimg= "col-md"
        coltext= "col-md"
        btnLink="/reservation"
        content="Belgravia Restaurant is a combination of both a restaurant and a café welcoming you all the way from London to Al Hazm Mall. With its elegant décor and the highly skilled employees, your experience in Belgravia will for sure be top-notch. Belgravia’s variety of delectable dishes are served with a Middle Eastern touch. Belgravia’s high-quality chefs are London trained and have had experience for over 20 years. Their outstanding personalities provided all our regulars with an unforgettable experience. Belgravia’s outdoor location, nice terrace and outdoor air-conditioned seating adds to the London-effect. To add to that, Belgravia’s most famous dish, Risotto, is the best in Qatar and the main reason our regulars dine at our restaurant."
      />
      <Swip />
      <WhatsApp />
    </>
  )
}
