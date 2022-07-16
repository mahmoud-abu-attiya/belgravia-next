import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import placeholder from "../public/images/blgv-placeholder.png";

const myLoader = ({ src }) => {
  return src;
};
const Section = (props) => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [content, setContent] = useState(false);
  useEffect(() => {
    axios.get(props.api_url).then((res) => {
      setContent(true);
      setImage(res.data.image);
      setText(res.data.text);
      console.log(text);
      console.log(image);
    });
  }, [props.api_url, image, text]);
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
              src={content ? image : placeholder}
              alt="belgravia restaurant"
              layout="responsive"
              width={props.width}
              height={props.height}
              loader={myLoader}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={props.coltext}>
            <h2 data-aos="fade-up">{props.title}</h2>
            <p data-aos="fade-up"> {text} </p>
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
