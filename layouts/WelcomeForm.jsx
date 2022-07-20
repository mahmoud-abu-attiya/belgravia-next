import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WelcomeForm = () => {
  const [Bday, setBday] = useState(new Date())
  // const [welcome, setWelcome] = useState(false);
  // useEffect(() => {
  //   let btnWelcome = document.querySelector(".btnWelcome");
  //   btnWelcome.addEventListener("click", () => {
  //     window.onload = () => {
  //       setWelcome(true);
  //     };
  //   });
  // }, []);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Open modal for @mdo
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Welcome to belgravia restaurint
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>
                <p>
                  Please enter your data.<br/>
                  <small>We'll never share your data with anyone else.</small>
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="name"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-light"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    id="phoneNumber"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="birthd" className="form-label">
                    Your Birthday
                  </label>
                  <DatePicker
                    selected={Bday}
                    onChange={date => setBday(date)}
                    dateFormat="dd/MM/yyyy"
                    maxDate={new Date()}
                    id="birthd"
                    className="form-control bg-light"
                    showYearDropdown
                    scrollableMonthYearDropdown
                    />
                </div>
                <input type="submit" className="btn w-100 mt-4" hover="true" style={{backgroundColor: "rgb(83, 0, 0)", color:"#f8f9fa"}} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
