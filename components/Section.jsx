import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import frame from '../public/images/frame.png'

const Section = (props) => {
  return (
    <section className={"about py-5 " + props.bg }>
    <div className="container">
      <div
        className={"row g-4 align-items-center " + props.revers}
        
      >
        <div className={"zena shadow p-0 rounded " + props.HIM + " " + props.colimg} data-aos={props.aos}>
          <div className="frame" style={{left: props.frameP == "left" ? "-5%" : "5%"}}>
          <Image layout='fill' src={frame} alt="frame" className=""/>
          </div>
          <Image
            className="rounded image_border"
            src={props.img}
            alt={props.imgalt}
            layout="responsive"
          />
        </div>
        <div className={props.coltext}>
          <h2 data-aos="fade-up">{props.title}</h2>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptatem quos accusantium officia molestiae ut odit, delectus
            enim, dicta natus magnam corporis consequatur fugit harum ducimus
            maxime officiis quae aliquam. Explicabo, necessitatibus unde! Eum
            enim maiores labore odit quae facere quasi, rem consequatur. Unde
            minima doloribus suscipit, perspiciatis dolorum amet iusto nostrum
            nemo et quasi illo doloremque voluptas mollitia quae? Soluta,
            velit et? Tempora suscipit facere, minima, quasi labore voluptates
            fugiat at corrupti vel harum adipisci? Veniam voluptates vitae et
            hic. Sequi atque iste tempore, est perferendis quia ipsum aliquid!
            Iure nostrum ipsum voluptates nobis voluptate non ullam
            laudantium, sunt facilis ea rem qui sapiente? Cumque assumenda
            natus dolor amet illo, hic recusandae excepturi asperiores
            maiores, facilis accusamus consequuntur optio!
          </p>
          {props.btn !== undefined ? <Link href={props.btnLink}><a data-aos="fade-up" className="btn btn-outline btn-lg shadow">{props.btn}</a></Link> : null}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section