const Info = () => {
  return (
    <div className="container pb-5">
      <div className="row bg-light rounded image_border shadow-sm">
        <div className="col-md-6 py-md-5 py-4 px-md-4 px-3 text-start d-flex justify-content-between flex-column">
          <div className="wh">
            <h5>Working Hours (Soft Opening)</h5>
            <p className="m-0">EVERYDAY, FROM 1PM to 12AM</p>
          </div>
          <hr />
          <div className="addres">
            <h5>Address</h5>
            <p className="m-0">
              Zone 33، Street 380, Building 211.
              <br />
              Alhazem Mall, Doha, Qatar.
            </p>
          </div>
          <hr />
          <div className="contact-info">
            <h5>contact</h5>
            <a href="tel: +97444445660">
              <i className="mx-2 fas fa-phone-alt"></i>
              (00974) 4444 5660
            </a>
            <br />
            <a href="mailto: info@belgravia.qa">
              <i className="mx-2 fas fa-envelope"></i>
              info@belgravia.qa
            </a>
          </div>
          <hr />
          <div className="social">
            <h5>social media</h5>
            Follow us on
            <a href="#" className="btn btn-outline mx-1">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-outline mx-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-outline mx-1">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="btn btn-outline mx-1">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 p-0  border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d901.5410749119558!2d51.4965223!3d25.3322672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db5f6c1200c7%3A0x9084fe7e30efe80a!2sBelgravia+Restaurant!5e0!3m2!1sen!2sqa!4v1520872418366"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Info;
