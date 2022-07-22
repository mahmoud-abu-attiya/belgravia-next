import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsApp = () => {
  return (
    <div className="whatsapp">
      <WhatsAppWidget
        phoneNumber="+97444445660"
        companyName="Belgravia"
        textReplyTime="Online"
      />
    </div>
  );
};

export default WhatsApp;
