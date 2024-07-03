import { NavLink } from "react-router-dom";

function Card() {
  return (
    <div className="card-bg pt-20 pb-20 md:pt-[120px] md:pb-[120px] lg:pt-[200px] lg:pb-[200px] mb-20">
      <div className="site-container flex flex-col items-center gap-5 lg:gap-10 text-center">
      <h5 className="text-white font-Unna uppercase text-sm md:text-lg tracking-[2px]">Gift Card</h5>
      <h1 className="text-white font-Unna text-4xl md:text-[56px]">Give the Gift of Greenery</h1>
      <p className="text-white">Pretium tortor risus enim neque quis pellentesque maecenas proin odio eget arcu</p>
      <NavLink className="capitalize focus:outline-none bg-white text-darkness px-5 py-2" to="/">Purchise a gift card</NavLink>
      </div>
    </div>
  )
}

export default Card;