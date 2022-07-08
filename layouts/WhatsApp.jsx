import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsApp = () => {
  return (
    <div className="whatsapp">
      <WhatsAppWidget
        phoneNumber="+201020384108"
        companyName="Belgravia"
        textReplyTime="Online"
      />
    </div>
  );
};

export default WhatsApp;
