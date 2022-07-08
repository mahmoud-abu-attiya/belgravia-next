import React from "react";
import Image from "next/image";
import Link from "next/link";
import frame from "../public/images/frame.png";

const Section = (props) => {
  return (
    <section className={"about py-5 " + props.bg} id={props.id}>
      <div className="container">
        <div className={"row g-4 align-items-center " + props.revers}>
          <div
            className={
              "zena shadow p-0 rounded " + props.HIM + " " + props.colimg
            }
            data-aos={props.aos}
          >
            <Image
              className="rounded image_border"
              src={props.img}
              alt={props.imgalt}
              layout="responsive"
            />
          </div>
          <div className={props.coltext}>
            <h2 data-aos="fade-up">{props.title}</h2>
            <p data-aos="fade-up"> {props.content} </p>
            {props.btn !== undefined ? (
              <Link href={props.btnLink}>
                <a data-aos="fade-up" className="btn btn-outline btn-lg shadow">
                  {props.btn}
                </a>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
