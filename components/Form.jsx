import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const Form = () => {
  const [supj, setSupj] = useState([]);

  useEffect(() => {
    axios.get("https://belgravia.qa/api/contact/subjects/").then((res) => {
      setSupj(res.data);
    });
    const formSubmit = () => {
      let inpEmail = document.getElementById("floatingInputone"),
        inpName = document.getElementById("floatingInputtow"),
        inpMsg = document.getElementById("floatingTextarea2"),
        inpList = document.querySelector("#validationCustom04"),
        myState = {
          name: inpName.value,
          email: inpEmail.value,
          message: inpMsg.value,
          subject: inpList.value,
        };
      const sweetalert = () => {
        swal("Thanks!", "We will contact you as soon as possible.", "success");
        inpEmail.value = "";
        inpMsg.value = "";
        inpName.value = "";
        inpList.value = "";
      };
      const sweetalertError = () => {
        swal("Error!", "There is something wrong! Try agein.", "error");
      };
      axios
        .post("https://belgravia.qa/api/contact/", myState)
        .then((res) => {
          sweetalert();
        })
        .catch((err) => {
          console.log("error in request", err);
          sweetalertError();
        });
    };
    let form = document.getElementById("contactForm");
    form.onsubmit = (e) => {
      e.preventDefault();
      formSubmit();
    };
  }, []);
  return (
    <form
      method="POST"
      className="row g-3 my-5 rounded-4 p-md-4 p-2 text-center image_border shadow"
      id="contactForm"
    >
      <div className="col-md-6 form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInputone"
          placeholder="Email address"
          required
        />
        <label className="px-3" htmlFor="floatingInput">
          Email address
        </label>
      </div>
      <div className="col-md-6 form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInputtow"
          placeholder="Your name"
          required
        />
        <label className="px-3" htmlFor="floatingInput">
          Your name
        </label>
      </div>
      <div className="col-12 mb-3">
        <select defaultValue="" className="form-select" id="validationCustom04">
          <option value="" disabled>
            Choose subject...
          </option>
          {supj.map((sup) => {
            return (
              <option value={sup.id} key={sup.id}>
                {sup.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-12 form-floating mb-3">
        <textarea
          className="form-control"
          id="floatingTextarea2"
          style={{ height: 200 }}
          placeholder="Message"
          required
        ></textarea>
        <label className="px-3" htmlFor="floatingTextarea2">
          leave a message
        </label>
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#350000", color: "#FFF" }}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
