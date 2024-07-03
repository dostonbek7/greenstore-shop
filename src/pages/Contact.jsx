import Form from "../components/Form";
import ContactInfo from "../components/ContactInfo";
import Map from "../components/Map";

function Contact() {
  return (
    <div>
      <div className="site-container">
        <div className="flex flex-col justify-between md:flex-row gap-10 ">
          <ContactInfo />
          <Form />
        </div>
      </div>
      <Map />
    </div>
  );
}

export default Contact;
