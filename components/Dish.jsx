import Image from "next/image"

const Dish = (props) => {
  return (
    <div className="col">
    <div className="card mb-4 shadow h-100" data-aos="fade-up">
      <div>
        <Image
          src={props.meal.strMealThumb}
          className="card-img-top"
          alt={props.meal.strMeal}
          width={16}
          height={9}
          layout="responsive"
          objectFit="cover"
          loading="eager"
          priority
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.meal.strMeal}</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <p className="card-text rounded shadow price mt-auto">
          {props.meal.idMeal} $
        </p>
      </div>
    </div>
  </div>
  )
}

export default Dish