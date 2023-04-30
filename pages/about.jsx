import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";
import Section from "../components/Section";
import ScrollDownBtn from "../components/ScrollDownBtn";
import c1 from "../public/images/staff.jpg";
import c2 from "../public/images/ceo.jpg";
import c3 from "../public/images/headChef.jpg";
import c4 from "../public/images/resiption.jpg";
import Image from "next/image";

const About = () => {
  const staff = [
    {
      img: c2,
      name: "Mina Atef",
      recipe: "Restaurant Manager",
      position: "right center",
    },
    {
      img: c3,
      name: "Omar Alaoui",
      recipe: "Executive chef & co - founder",
      position: "left center",
    },
    {
      img: c4,
      name: "Anastasia gvozdeva",
      recipe: "Hostess",
      position: "right center",
    },
  ];
  return (
    <>
      <Head>
        <title>About Belgravia Restaurant</title>
        <meta
          name="description"
          content="Belgravia restaurant is a modern cuisine that offer a different kind of dishes, coming from London with European influence."
        />
        <meta name="og:title" content="About Belgravia Restaurant" />
        <meta
          name="og:description"
          content="Belgravia restaurant is a modern cuisine that offer a different kind of dishes, coming from London with European influence."
        />
        <meta property="og:url" content="https://belgravia.qa/about" />
      </Head>
      <header className={styles.headerAbout}>
        <div className="header-overlay"></div>
        <div className="hello">
          <h1 data-aos="fade-up" data-aos-duration="300">
            Belgravia Restaurant welcomes you
          </h1>
          <p data-aos="fade-up" data-aos-duration="500">
            Belgravia restaurant is a modern cuisine that offer a different kind
            of dishes, coming from London with European influence.
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
        bg="bg-light"
        revers="flex-row-reverse"
        frameP="right"
        HIM="HIM"
        aos="fade-left"
        api_url="https://belgravia.qa/api/website/about-belgravia/"
        title="About Belgravia"
        colimg="col-md-4"
        coltext="col-md-8"
        id="about"
        width={6}
        height={8}
      />
      <Section
        bg=" "
        revers=" "
        frameP="left"
        aos="fade-right"
        api_url="https://belgravia.qa/api/website/about-exec-cheff/"
        title="About The Executive Chef"
        colimg="col-md-4"
        coltext="col-md-8"
        width={6}
        height={8}
      />
      <section className="staff bg-light py-5">
        <div className="container">
          <div className="text-center">
            <h2>Our staff</h2>
            <p>
              Belgravia’s set of highly experienced staff is welcoming you with
              open arms.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-12 staff-card">
              <div
                className={
                  styles.chefCard +
                  " rounded shadow overflow-hidden ratio ratio-21x9"
                }
              >
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
                </div>
              </div>
            </div>
            {staff.map((chef, index) => {
              return (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div
                    className={
                      styles.chefCard +
                      " rounded shadow overflow-hidden ratio ratio-1x1"
                    }
                  >
                    <Image
                      src={chef.img.src}
                      className={styles.chefImage}
                      layout="fill"
                      alt={chef.name}
                      objectPosition={chef.position}
                      objectFit="cover"
                      priority
                    />
                    <div className={styles.info}>
                      <h4>{chef.name}</h4>
                      <p>{chef.recipe}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-4">
            <Link href="/contact">
              <a data-aos="fade-up" className="btn btn-outline btn-lg shadow">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
