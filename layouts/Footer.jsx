import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
      <section className="mb-4">
          <a className="btn m-1" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn m-1" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn m-1" href="#!">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn m-1" href="#!">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn m-1" href="#!">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
        © 2022 Copyright: Belgravia
        <p className="fs-6"> Developed by{" "}
          <a className="text-light text-underline" href="https://orizon.qa/"><u>Orizon Qatar</u></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
