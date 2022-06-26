import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ResForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form action="" className="bg-light rounded overflow-hidden image_border">
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
        <select name="" id="">
          <option value="">01:00 PM</option>
          <option value="">02:00 PM</option>
          <option value="">03:00 PM</option>
          <option value="">04:00 PM</option>
          <option value="">05:00 PM</option>
          <option value="">06:00 PM</option>
          <option disabled value="">07:00 PM</option>
          <option value="">08:00 PM</option>
          <option value="">09:00 PM</option>
          <option value="">10:00 PM</option>
          <option value="">11:00 PM</option>
        </select>
        {/* <input type="time" name="" id="" /> */}
      </div>
      <div className="p-num">
        <input type="number" name="" id="" placeholder="Number of seats" />
      </div>
      <div className="in">
        <h5>location</h5>
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1"> inDoor </label>
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1"> outDoor </label>
      </div>
      <div className="name">
        <input type="text" placeholder="Your Name" />
      </div>
      <div className="phone">
        <input type="text" placeholder="Your Phone number" />
      </div>
      <div className="done">
        <input type="submit" className="btn" style={{backgroundColor: "#350000", color: "#FFF"}} value="Book" />
      </div>
    </form>
  )
}

export default ResForm