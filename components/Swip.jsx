import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Image from "next/image";
import Link from "next/link";
import fork from "../public/images/fork.png"
import knife from "../public/images/knife.png"
import { useEffect, useState } from "react";

const Swip = () => {
  let [swipImage, setImages] = useState([]);
  useEffect(async () => {
    let url = 'http://44.208.45.254/api/home/products/'
    let response = await fetch(url);
    let data = await response.json();
    setImages(data);
  }, []);
  return (
    <section className="dishes bg-light py-5">
      <div className="container text-center">
        <h2>Discover our Dishes</h2>
        <p>
        Take a look at our menu to induce and view our divine dishes. 
        </p>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          data-aos="zoom-in-up"
          style={{width: 280, height: 340}}
        >
          <div className="tool fork">
            <Image src={fork} alt="fork" />
          </div>
          <div className="tool knife">
            <Image src={knife} alt="knife" />
          </div>
          {swipImage.map((el, index) => (
            <SwiperSlide key={index} className="shadow">
              <Image src={el.image} layout="fill" alt="belgravia food" className="image_border" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link href="/menu">
          <a data-aos="fade-up" className="btn btn-outline btn-lg shadow mt-4">View our menu</a>
        </Link>
      </div>
    </section>
  );
};

export default Swip;
