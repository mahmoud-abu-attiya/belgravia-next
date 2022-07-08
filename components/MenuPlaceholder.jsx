import Image from "next/image";
import placeholderImage from "../public/images/placeholderimage.png";

const MenuPlaceholder = () => {
  return (
    <div className="col">
      <div className="card mb-4 shadow h-100" aria-hidden="true">
        <div>
          <Image
            src={placeholderImage}
            className="card-img-top"
            alt="belgravia dish"
            width={16}
            height={9}
            layout="responsive"
            objectFit="cover"
            loading="eager"
            priority
          />
        </div>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6" />
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7" />
            <span className="placeholder col-4" />
            <span className="placeholder col-4" />
            <span className="placeholder col-6" />
            <span className="placeholder col-8" />
          </p>
          <a
            href="#"
            tabIndex={-1}
            className="btn btn-primary disabled placeholder col-6 rounded shadow price mt-auto w-25"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPlaceholder;
