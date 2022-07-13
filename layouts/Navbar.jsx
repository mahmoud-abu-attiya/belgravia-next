import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import log from "../public/images/logo3.png"
import logb from "../public/images/b.png"

const Navbar = () => {
  const [logo, setLogo] = useState(false)

  const navEffect = () => {
    let navbar = document.getElementById("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("nav_not_top", "shadow");
    } else {
      navbar.classList.remove("nav_not_top", "shadow");
    }
  };
  useEffect(() => {
    if (window.innerWidth < 767) {
      setLogo(true)
    }else{
      setLogo(false)
    }
    let btnToggler = document.querySelector(".navbar-toggler");
    let navbar = document.getElementById("nav");
    const handelNavClick = () => {
      btnToggler.addEventListener("click", () => {
        if (window.scrollY == 0) {
          navbar.classList.toggle("nav_not_top");
        }
      });
    };
    handelNavClick();
    navEffect();
    window.addEventListener("scroll", navEffect);
    return () => {
      window.removeEventListener("scroll", navEffect);
      handelNavClick();
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg" id="nav">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            {logo ? <Image src={logb} alt="belgravia" unoptimized={true} /> : <Image src={log} alt="belgravia" />}
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link href="/" passHref>
              <a className="nav-link mx-2">Home</a>
            </Link>
            <Link href="/menu" passHref>
              <a className="nav-link mx-2">Menu</a>
            </Link>
            <Link href="/reservation" passHref>
              <a className="nav-link mx-2">Reservation</a>
            </Link>
            <Link href="/about" passHref>
              <a className="nav-link mx-2">About</a>
            </Link>
            <Link href="/contact" passHref>
              <a className="nav-link mx-2">Contact us</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
