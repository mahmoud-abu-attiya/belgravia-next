import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Image from "next/image";
import Link from "next/link";
import fork from "../public/images/fork.png";
import knife from "../public/images/knife.png";
import { useEffect, useState } from "react";
import axios from "axios";

const myLoader = ({ src }) => {
  return src;
};
const Swip = () => {
  let [swipImage, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("http://44.208.45.254/api/home/products/")
      .then((res) => setImages(res.data));
  }, []);

  return (
    <section className="dishes bg-light py-5">
      <div className="container text-center">
        <h2>Discover our Dishes</h2>
        <p>Take a look at our menu to view the great variety of diverse dishes and induce your excitement. After viewing our indescribable dishes, you will have the choice to visit us or have the food delivered to your doorstep using Talabat, Foody, Carriage, Snoonu or Rafeeq.</p>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          data-aos="zoom-in-up"
          style={{ width: 280, height: 340 }}
        >
          <div className="tool fork">
            <Image src={fork} alt="fork" />
          </div>
          <div className="tool knife">
            <Image src={knife} alt="knife" />
          </div>
          {swipImage.map((el) => (
            <SwiperSlide key={el.id} className="shadow">
              <Image
                src={el.image}
                layout="fill"
                alt="belgravia food"
                className="image_border"
                loader={myLoader}
                objectFit="cover"
                objectPosition="center"
                priority
                unoptimized={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link href="/menu">
          <a data-aos="fade-up" className="btn btn-outline btn-lg shadow mt-4">
            View our menu
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Swip;
