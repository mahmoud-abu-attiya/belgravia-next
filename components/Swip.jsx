import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Image from "next/image";
import d1 from "../public/images/d1.jpg";
import d2 from "../public/images/d2.jpg";
import d3 from "../public/images/d3.jpg";
import d4 from "../public/images/d4.jpg";
import d5 from "../public/images/d5.jpg";
import d6 from "../public/images/d6.jpg";
import d7 from "../public/images/d7.jpg";
import d8 from "../public/images/d8.jpg";
import d9 from "../public/images/d9.jpg";
import Link from "next/link";
import fork from "../public/images/fork.png"
import knife from "../public/images/knife.png"

const Swip = () => {
  let swipImage = [d1, d2, d3, d4, d5, d6, d7, d8, d9];
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
              <Image src={el} layout="fill" alt="belgravia food" className="image_border" />
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
