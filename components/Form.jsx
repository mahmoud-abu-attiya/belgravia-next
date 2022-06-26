import { useEffect } from "react"
import swal from 'sweetalert';

const Form = () => {
  useEffect(() => {
    const formSubmit=()=>{
      let inpEmail = document.getElementById("floatingInputone")
      let inpName = document.getElementById("floatingInputtow")
      let inpMsg = document.getElementById("floatingTextarea2")
      let myState = {
          name: inpName.value,
          email: inpEmail.value,
          msg: inpMsg.value,
      }
      const sweetalert=()=>{
        swal("Thanks!", "We will contact you as soon as possible.", "success")
        inpEmail.value = ''
        inpMsg.value = ''
        inpName.value = ''
      }
      fetch('https://formsubmit.co/ajax/mahmoudabuattiya106@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(myState)
      })
      .then(sweetalert())
    }
    let form = document.getElementById("contactForm")
    form.addEventListener("submit" , (e)=>{
      e.preventDefault();
      formSubmit();
    })
  }, []);
  return (
    <form className="row g-3 my-5 bg-light rounded-4 p-md-4 p-2 text-center image_border shadow" id="contactForm">
      <div className="col-md-6 form-floating mb-3">
        <input type="email" className="form-control" id="floatingInputone" placeholder='Email address' required/>
        <label className='px-3' htmlFor="floatingInput">Email address</label>
      </div>
      <div className="col-md-6 form-floating mb-3">
        <input type="text" className="form-control" id="floatingInputtow" placeholder='Your name' required/>
        <label className='px-3' htmlFor="floatingInput">Your name</label>
      </div>
      <div className="col-12 form-floating mb-3">
        <textarea 
          className="form-control"
          id="floatingTextarea2"
          style={{height: 200}}
          placeholder="Message"
          required
        ></textarea>
        <label className='px-3' htmlFor="floatingTextarea2">leave a message</label>
      </div>
      <div className="col-12">
        <button type="submit" className="btn" style={{backgroundColor: "#350000", color: "#FFF"}}>Send</button>
      </div>
    </form>
  )
}

export default Form