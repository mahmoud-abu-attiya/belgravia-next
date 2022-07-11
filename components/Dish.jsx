import Image from "next/image"

const myLoader = ({ src }) => {
  return src;
};
const Dish = (props) => {
  return (
    <div className="col">
    <div className="card mb-4 shadow h-100" data-aos="fade-up">
      <div>
        <Image
          src={props.meal.image}
          className="card-img-top"
          alt={"Belgravia" + props.meal.name}
          width={16}
          height={9}
          layout="responsive"
          objectFit="cover"
          loading="eager"
          loader={myLoader}
          priority
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.meal.name}</h5>
        <p className="card-text">{props.meal.describtion}</p>
        <p className="card-text rounded shadow price mt-auto">
          {props.meal.price} $
        </p>
      </div>
    </div>
  </div>
  )
}

export default Dish