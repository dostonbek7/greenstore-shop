import { NavLink } from "react-router-dom";

function Hero() {
  return (
   <div className="hero-section">
     <div className="site-container">
      <div className="flex items-center justify-center flex-col h-screen text-center">
      <h4 className="uppercase text-white text-lg md:text-2xl mb-10 md:tracking-[3px] lg:tracking-[5px]">Welcome to the greenstore</h4>
      <h1 className="text-white mb-10 text-4xl lg:text-7xl">Let's Bring the Spring to <br /> Your Home</h1>
      <NavLink to='/' className="capitalize text-base focus:outline-none focus:border-red-600 text-darkness px-5 py-2 bg-white">Shop now</NavLink>
    </div>
    </div>
   </div>
  );
}

export default Hero;
