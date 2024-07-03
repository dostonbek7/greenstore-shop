import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-darkness">
      <div className="site-container">
        <div>
          <nav className="flex flex-col md:flex-row items-center justify-center gap-5 pt-16 mb-16">
            <NavLink className="text-white item-hover" to="/">
              Home
            </NavLink>
            <NavLink className="text-white item-hover" to="/plants">
              Plants
            </NavLink>
            <NavLink className="text-white item-hover" to="/about">
              About
            </NavLink>
            <NavLink className="text-white item-hover" to="/contact">
              Contact
            </NavLink>
          </nav>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-white font-Unna text-[22px] mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex flex-col justify-center md:flex-row gap-4 mb-10 max-w-[370px]">
              <input
                className="p-3 bg-white min-w-[350px] focus:outline-none"
                type="text"
                placeholder="Your email address..."
              />
              <button className="text-white md:w-[160px] focus:outline-none bg-light-green hover:bg-gray px-[30px] py-[15px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mb-16">
            <FaInstagram className="text-2xl hover:text-white text-cool-color focus:border-dashed focus:border-light-green" />
            <FaFacebook className="text-2xl hover:text-white text-cool-color focus:border-dashed focus:border-light-green" />
            <FaTwitter className="text-2xl hover:text-white text-cool-color focus:border-dashed focus:border-light-green" />
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] text-white opacity-20" />
      <p className="text-sm text-center text-white py-14">
        © 2024 Plant Shop. Powered by Plant Shop.
      </p>
    </div>
  );
}

export default Footer;
