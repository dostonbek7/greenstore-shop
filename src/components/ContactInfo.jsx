import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaPinterest,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="pt-8 pb-12 grow shrink md:basis-[50%] ">
      <div className="md:border-r-[1px] md:border-gray md:border-opacity-25 md:pr-12">
        <div className="text-center mb-8 md:text-left">
          <h1 className="text-[40px] text-nowrap lg:text-[72px] text-darkness font-Unna mb-4">
            Get In Touch
          </h1>
          <p className="text-[14px] text-gray md:max-w-[400px]">
            Sit vulputate faucibus eget eget scelerisque faucibus malesuada
            nullam mollis ut montes, dui scelerisque ornare.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-5 border-b-[1px] border-gray border-opacity-25 pb-6">
          <div className="contact-card">
            <FaMapMarkerAlt className="text-light-green text-lg md:text-xl" />
            <div className="text-center md:text-left">
              <span className="text-[14px] font-Unna text-gray">VISIT US</span>
              <p className="text-[14px] md:text-[16px] text-gray font-semibold">
                123 Demo St, San Francisco, CA 45678, United States
              </p>
            </div>
          </div>
          <div className="contact-card">
            <FaPhoneAlt className="text-light-green text-lg" />
            <div className="text-center md:text-left">
              <span className="text-[14px] font-Unna text-gray">CALL US</span>
              <p className="text-[14px] md:text-[16px] text-gray font-semibold">
                +1 123-456-7890
              </p>
            </div>
          </div>
          <div className="contact-card">
            <FaEnvelope className="text-light-green text-lg" />
            <div className="text-center md:text-left">
              <span className="text-[14px] font-Unna text-gray">EMAIL US</span>
              <p className="text-[14px] md:text-[16px] text-gray font-semibold">
                mail@example.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 pt-8">
          <h6 className="text-darkness font-Unna text-[14px] tracking-[2px] leading-[1.25]">
            FOLLOW US
          </h6>
          <div className="flex items-center justify-center gap-4">
            <FaInstagram className="text-2xl hover:text-light-green" />
            <FaPinterest className="text-2xl hover:text-light-green" />
            <FaFacebook className="text-2xl hover:text-light-green" />
            <FaYoutube className="text-2xl hover:text-light-green" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
