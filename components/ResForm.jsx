import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';

const ResForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("")
  const [location, setLocation] = useState(true)
  const [seats, setSeats] = useState(1)
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
        setTime(timeInp.value);
      }
    })
    resForm.onsubmit = (e)=>{
      e.preventDefault();
      let inpDate = document.getElementById("date");
      let inpTime = document.getElementById("time");
      let inpSeats = document.getElementById("seats");
      let inpName = document.getElementById("name");
      let inpPhone = document.getElementById("phone");
      let door = document.querySelector(".form-check-input[checked]")
      if(door.id == "flexRadioDefault1"){
        setLocation(true)
      } else {
        setLocation(false)
      }
      let myState = {
        date: inpDate.value,
        time: inpTime.value,
        name: inpName.value,
        phone: inpPhone.value,
        seats_number: parseInt(inpSeats.value),
        is_outdoor: location,
      };

      const sweetalert = () => {
        swal("Thanks!", "We will contact you as soon as possible.", "success");
      };
      const sweetalertError = () => {
        swal("Error!", "There is something wrong! Try agein.", "error");
      };
      fetch("http://44.208.45.254/api/reservation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(myState),
      })
      .then(sweetalert())
      .catch(sweetalertError()) 
      console.log(myState);
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
        id="date"
        />
      </div>
      <div className="time">
        <h5 className="m-0">time</h5>
        <input type="text" disabled id="time" required/>
        <button className="btn" id="timeBtn">
          <i className="fad fa-clock"></i>
        </button>
        <div className="options rounded border border-2 shadow">
            <button className="option border rounded">01:00 PM</button>
            <button className="option border rounded">02:00 PM</button>
            <button className="option border rounded">03:00 PM</button>
            <button className="option border rounded">04:00 PM</button>
            <button className="option border rounded">05:00 PM</button>
            <button className="option border rounded">06:00 PM</button>
            <button className="option border rounded">07:00 PM</button>
            <button className="option border rounded">08:00 PM</button>
            <button className="option border rounded">09:00 PM</button>
            <button className="option border rounded">10:00 PM</button>
            <button className="option border rounded">11:00 PM</button>
          </div>
      </div>
      <div className="p-num">
        <input type="number" value={seats} onChange={e => setSeats(e.target.value)} min={1} step="1" id="seats" placeholder="Number of seats" />
      </div>
      <div className="door">
        <h5>location</h5>
        <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1"> inDoor </label>
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        <label className="form-check-label" htmlFor="flexRadioDefault2"> outDoor </label>
      </div>
      <div className="name">
        <input type="text" id="name" placeholder="Your Name" required/>
      </div>
      <div className="phone">
        <input type="text" id="phone" placeholder="Your Phone number" required/>
      </div>
      <div className="done">
        <input type="submit" className="btn" style={{backgroundColor: "#350000", color: "#FFF"}} value="Book" />
      </div>
    </form>
  )
}

export default ResForm