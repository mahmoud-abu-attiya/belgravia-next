import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';

const ResForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    let resForm = document.querySelector("form")
    let optionsBox = document.querySelector(".options")
    let options = optionsBox.querySelectorAll("button.option")
    let timeBtn = document.getElementById("timeBtn")
    let timeInp = document.getElementById("time")
    timeBtn.onclick = (e)=>{
      e.preventDefault();
      optionsBox.classList.toggle("show-options");
    }
    options.forEach(option => {
      option.onclick = (e) => {
        e.preventDefault();
        timeInp.value = option.innerText;
      }
    })
    resForm.onsubmit = (e)=>{
      e.preventDefault();
      swal("Thanks!", "We will contact you as soon as possible.", "success")
    }
  }, []);
  return (
    <form className="bg-light rounded overflow-hidden image_border">
      <div className="date">
        <h5>Date</h5>
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        />
      </div>
      <div className="time">
        <h5 className="m-0">time</h5>
        <input type="text" disabled name="" id="time" required/>
        <button className="btn" id="timeBtn">
          <i className="fad fa-clock"></i>
        </button>
        <div className="options rounded border border-2 shadow">
            <button className="option border rounded">01:00 PM</button>
            <button disabled className="option border rounded">02:00 PM</button>
            <button className="option border rounded">03:00 PM</button>
            <button disabled className="option border rounded">04:00 PM</button>
            <button className="option border rounded">05:00 PM</button>
            <button className="option border rounded">06:00 PM</button>
            <button disabled className="option border rounded">07:00 PM</button>
            <button className="option border rounded">08:00 PM</button>
            <button className="option border rounded">09:00 PM</button>
            <button className="option border rounded">10:00 PM</button>
            <button className="option border rounded">11:00 PM</button>
          </div>
      </div>
      <div className="p-num">
        <input type="number" name="" id="" placeholder="Number of seats" />
      </div>
      <div className="in">
        <h5>location</h5>
        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1"> inDoor </label>
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1"> outDoor </label>
      </div>
      <div className="name">
        <input type="text" placeholder="Your Name" required/>
      </div>
      <div className="phone">
        <input type="text" placeholder="Your Phone number" required/>
      </div>
      <div className="done">
        <input type="submit" className="btn" style={{backgroundColor: "#350000", color: "#FFF"}} value="Book" />
      </div>
    </form>
  )
}

export default ResForm