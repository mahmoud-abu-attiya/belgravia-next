import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";
import Section from "../components/Section";
import ScrollDownBtn from "../components/ScrollDownBtn";
import hImg from "../public/images/about2.jpg"
import chef from "../public/images/chef.jpg"
import c1 from "../public/images/staff.jpg"
import c2 from "../public/images/ceo.jpg"
import c3 from "../public/images/headChef.jpg"
import c4 from "../public/images/resiption.jpg"
import c5 from "../public/images/weater.jpg"
import c6 from "../public/images/weater2.jpg"
import cstaff from "../public/images/ckitchenStaff.jpg"
import Image from "next/image";

const about = () => {
  const staff = [
    {
      img: c2,
      name: "name",
      recipe: "chef position",
    },
    {
      img: c3,
      name: "name",
      recipe: "chef position",
    },
    {
      img: c4,
      name: "name",
      recipe: "chef position",
    },
    {
      img: c5,
      name: "name",
      recipe: "chef position",
      contactLink: "#"
    },
    {
      img: c6,
      name: "name",
      recipe: "chef position",
    },
    {
      img: cstaff,
      name: "Ckitchen Staff",
      recipe: null,
    }
  ]
  return (
    <>
      <Head>
        <title>About Belgravia Restaurant</title>
        <meta name="description" content="Belgravia restaurant is a modern cuisine that offer a different kind of dishes, coming from London with European influence." />
        <meta name="og:title" content="About Belgravia Restaurant" />
        <meta name="og:description" content="Belgravia restaurant is a modern cuisine that offer a different kind of dishes, coming from London with European influence."/>
        <meta property="og:url" content="https://belgravia.qa/about" />
      </Head>
      <header className={styles.headerAbout}>
        <div className="header-overlay"></div>
        <div className="hello">
          <h1 data-aos="fade-up" data-aos-duration="300">
            Belgravia Restaurant welcomes you
          </h1>
          <p data-aos="fade-up" data-aos-duration="500">
          Belgravia restaurant is a modern cuisine that offer a different kind of dishes, coming from London with European influence.
          </p>
          <Link href="/contact">
            <a
              data-aos="fade-up"
              data-aos-duration="700"
              className="btn btn-lg shadow rounded-pill"
            >
              Contact Us
            </a>
          </Link>
          <ScrollDownBtn target="about" />
        </div>
      </header>
      <Section
        bg= "bg-light"
        revers= "flex-row-reverse"
        frameP= "right"
        HIM="HIM"
        aos="fade-left"
        img={hImg}
        imgalt = "belgravia"
        title= "About Belgravia"
        colimg= "col-md-4"
        coltext= "col-md-8"
        id="about"
        content="Belgravia Restaurant is a combination of both a restaurant and a café welcoming you all the way from London to Al Hazm Mall. With its elegant décor and the highly skilled employees, your experience in Belgravia will for sure be top-notch. Belgravia’s variety of delectable dishes are served with a Middle Eastern touch. Belgravia’s high-quality chefs are London trained and have had experience for over 20 years. Their outstanding personalities provided all our regulars with an unforgettable experience. Belgravia’s outdoor location, nice terrace and outdoor air-conditioned seating adds to the London-effect. To add to that, Belgravia’s most famous dish, Risotto, is the best in Qatar and the main reason our regulars dine at our restaurant."

      />
      <Section
        bg= " "
        revers= " "
        frameP= "left"
        aos="fade-right"
        img={chef}
        imgalt = "belgravia"
        title= "About The Executive Chef"
        colimg= "col-md-4"
        coltext= "col-md-8"
        content="Belgravia Restaurant is a combination of both a restaurant and a café welcoming you all the way from London to Al Hazm Mall. With its elegant décor and the highly skilled employees, your experience in Belgravia will for sure be top-notch. Belgravia’s variety of delectable dishes are served with a Middle Eastern touch. Belgravia’s high-quality chefs are London trained and have had experience for over 20 years. Their outstanding personalities provided all our regulars with an unforgettable experience. Belgravia’s outdoor location, nice terrace and outdoor air-conditioned seating adds to the London-effect. To add to that, Belgravia’s most famous dish, Risotto, is the best in Qatar and the main reason our regulars dine at our restaurant."

      />
      <section className="staff bg-light py-5">
        <div className="container">
            <div className="text-center">
              <h2>Our staff</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, dolore!</p>
            </div>
          <div className="row g-4">
            <div className="col-12">
              <div className={styles.chefCard + " rounded shadow overflow-hidden ratio ratio-21x9"}>
                <Image
                  src={c1} 
                  className={styles.chefImage} 
                  layout="fill" 
                  alt="Belgravia staff"
                  objectFit="cover"
                  priority
                  />
                <div className={styles.info}>
                  <h4>Belgravia staff</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam, perferendis ut nam</p>
                </div>
              </div>
            </div>
            {staff.map((chef, index) => {
              return (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className={styles.chefCard + " rounded shadow overflow-hidden ratio ratio-1x1"}>
                  <Image
                    src={chef.img.src} 
                    className={styles.chefImage} 
                    layout="fill" 
                    alt={chef.name}
                    objectFit="cover"
                    priority
                    />
                  <div className={styles.info}>
                    <h4>{chef.name}</h4>
                    <p>{chef.recipe}</p>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
            <div className="text-center mt-4">
              <Link href="/contact">
                <a data-aos="fade-up" className="btn btn-outline btn-lg shadow">Contact Us</a>
              </Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default about