import { FaBagShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";

function Navbar() {
  const { total, price } = useSelector((store) => store.basket);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const shoppingCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="site-container border-b-[1px] border-gray border-opacity-25 z-0">
      <div className="flex items-center justify-between py-6 lg:py-10 relative ">
        <IoMenu
          onClick={handleMenu}
          className="text-2xl text-light-green lg:hidden cursor-pointer"
        />
        <NavLink to="/">
          <h1 className="text-2xl">Greenstore</h1>
        </NavLink>
        {showMenu && (
          <nav className="absolute top-[100%] left-0 right-0  flex flex-col items-start gap-4 bg-white py-4 px-4 lg:hideen">
            <NavLink to="/" className="item-hover" href="">
              Home
            </NavLink>
            <NavLink to="/plants" className="item-hover" href="">
              Plants
            </NavLink>
            <NavLink to="/about" className="item-hover" href="">
              About
            </NavLink>
            <NavLink to="/contact" className="item-hover" href="">
              Contact
            </NavLink>
          </nav>
        )}
        <div className="flex items-center gap-8">
          <nav className="lg:flex items-center gap-10 hidden">
            <NavLink to="/" className="item-hover" href="">
              Home
            </NavLink>
            <NavLink to="/plants" className="item-hover" href="">
              Plants
            </NavLink>
            <NavLink to="/about" className="item-hover" href="">
              About
            </NavLink>
            <NavLink to="/contact" className="item-hover" href="">
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-light-green font-semibold cursor-pointer">
              ${price}
            </span>
            <div className="flex items-center gap-2 relative lg:mr-4">
              <FaBagShopping
                onClick={shoppingCart}
                className="text-xl text-light-green cursor-pointer"
              />
              <div className="absolute bottom-3 left-4 bg-light-green w-5 h-5 rounded-full text-center">
                <span className="text-white">{total}</span>
              </div>
            </div>
            <FaUser className="text-darkness cursor-pointer hover:text-gray text-xl hidden lg:flex" />
          </div>
        </div>
      </div>
      {showCart && <ShoppingCart />}
    </div>
  );
}

export default Navbar;
//90 0403129
