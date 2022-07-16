import Image from "next/dist/client/image";
import offerImageP from "../public/images/offer.webp"
import { useEffect, useState } from "react";
import axios from "axios";

const Offer = () => {
  const [isOffer, setIsOffer] = useState(false)
  const [offer, setOffer] = useState()
  const [offerImage, setOfferImage] = useState("")
  const [offerDelay, setOfferDelay] = useState(1)
  useEffect(() => {
    const getCookie = (cname) => {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    const setCookie = (cname, cvalue, exdays) => {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    axios.get("https://blgrv-api.orizon.qa/api/get-offer/")
    .then((res) => {
      if(getCookie("offer") == ""){
        setIsOffer(true)
        setOfferImage(res.data.image)
        setOfferDelay(res.data.time_in_seconds + "000")
      }
    })
    .catch((err) => {
      console.log("offer error !",err);
    })
    let btnOffer = document.querySelector(".btnOffer")
    if(isOffer){
      setTimeout(() => {
        btnOffer.click();
      }, offerDelay);
    }
    btnOffer.addEventListener("click", ()=>{
      setCookie("offer", "offer", 30)
    }) 
  }, [isOffer, offerDelay]);
  return (
    <div>
      <button
      style={{display : "none"}}
        type="button"
        className="btn btn-primary btnOffer"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
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
                Belgravia Offer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <Image
                src={isOffer ? offerImage : offerImageP }
                className="rounded"
                alt="belgravia offer"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary w-100"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
