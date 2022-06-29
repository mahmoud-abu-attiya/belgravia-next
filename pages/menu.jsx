import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import styles from "../styles/Menu.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollDownBtn from "../components/ScrollDownBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [categorys, setCategorys] = useState([])
  const [category, setCategory] = useState('chicken')

  
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then((response) => {
        setCategorys(response.data.meals )
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((error) => {
        setError(error);
      });
  }, [category]);

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
      <header className={styles.headerMenu}>
        <div className={styles.headerOverlay}></div>
        <div className="hello">
          <h1 data-aos="fade-up" data-aos-duration="300">
            Welcome to Belgravia Restaurant
          </h1>
          <p data-aos="fade-up" data-aos-duration="500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, est.
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
          <ScrollDownBtn />
        </div>
      </header>
      <div className="container pt-5" id="menu">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-5"
          // style={{ color: "#330000" }}
        >
          {categorys.map((cat, index) => {
            return (
              <SwiperSlide key={index}>
                <button className={ cat.strCategory == category ? 'active-cat btn btn-outline category': 'btn btn-outline category'} onClick={()=> setCategory(cat.strCategory)}>{cat.strCategory}</button>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {meals.map((meal, index) => (
            <div className="col" key={index}>
              <div className="card mb-4 shadow h-100" data-aos="fade-up">
                <div>
                  <Image
                    src={meal.strMealThumb}
                    className="card-img-top"
                    alt={meal.strMeal}
                    width={16}
                    height={9}
                    layout="responsive"
                    objectFit="cover"
                    loading="eager"
                    priority
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{meal.strMeal}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text rounded shadow price mt-auto">
                    {meal.idMeal} $
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}
