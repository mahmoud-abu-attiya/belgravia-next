import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";

const WelcomeForm = () => {
  const [Bday, setBday] = useState(new Date());
  const [welcome, setWelcome] = useState(false);
  const [token, setToken] = useState("")
  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };
  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  useEffect(() => {
    if(getCookie("mainToken") != "" ){
      console.log("token is here");
      axios
        .get("https://blgrv-api.orizon.qa/api/should-show-form/", {
          headers:{
            Authorization: getCookie("mainToken"),
          }
        })
        .then((res) => {
          setWelcome(res.data.show_form);
        });
    } else {
      axios
      .get("https://blgrv-api.orizon.qa/api/should-show-form/")
      .then((res) => {
        setWelcome(res.data.show_form);
        setToken(res.data.token)
        setCookie("mainToken", res.data.token, 365)
      });
    }
  }, [welcome]);
  useEffect(() => {
    let inpName = document.getElementById("wname");
    let inpEmail = document.getElementById("wemail");
    let btnClose = document.querySelector(".btn-close")
    let inpPhone = document.getElementById("wphoneNumber");
    let inpBday = document.getElementById("wbirthd");
      if (welcome) {
        console.log("welcome");
        let showWelcomeBtn = document.querySelector("button.showWelcome");
        let welcomeForm = document.getElementById("welcomeForm")
        setTimeout(() => {
          showWelcomeBtn.click();
        }, 1000);
        welcomeForm.onsubmit = (e)=>{
          e.preventDefault();
          let myState = {
            name: inpName.value,
            email: inpEmail.value,
            phone: inpPhone.value,
            dop: inpBday.value,
          };
          axios
            .patch("https://blgrv-api.orizon.qa/api/client-data/", myState , {
              headers:{
                Authorization: getCookie("mainToken"),
              }
            })
            .then(() => {
              btnClose.click();
              swal("Thanks!", "We will contact you as soon as possible.", "success");
            }).catch((err) => {
              swal("Error!", "There is some thing wrong try again!.", "error");
              console.log(err);
            })
        }
      }
  }, [welcome, token]);
  return (
    welcome && (
      <>
        <button
          style={{display: "none"}}
          type="button"
          className="btn btn-primary showWelcome"
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
                    Please enter your data.
                  </p>
                </div>
                <form id="welcomeForm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      id="wname"
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
                      id="wemail"
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
                      id="wphoneNumber"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="birthd" className="form-label">
                      Your Birthday
                    </label>
                    <DatePicker
                      selected={Bday}
                      onChange={(date) => setBday(date)}
                      dateFormat="yyyy-MM-dd"
                      maxDate={new Date()}
                      id="wbirthd"
                      className="form-control bg-light"
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn w-100 mt-4"
                    hover="true"
                    style={{
                      backgroundColor: "rgb(83, 0, 0)",
                      color: "#f8f9fa",
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default WelcomeForm;
