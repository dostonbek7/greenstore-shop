import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/basket/BasketSlice";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function SingleItem({ plant }) {
  // const { allProduct } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  return (
    <div className="site-container">
      <div className="flex items-start gap-10 justify-center">
        <div className="flex flex-col gap-5">
          <div className="relative plant-card lg:w-[435px] lg:h-[635px]">
            <img
              className="object-cover mb-4 cursor-pointer"
              src={plant.image}
              alt={plant.name}
            />
            <div className="shopping-bag absolute top-[20px] right-[20px] w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <FaMagnifyingGlass className="text-gray hover:text-darkness text-xl " />
            </div>
          </div>
          <div className="flex items-center gap-5">
            {plant.images.map((item, ind) => {
              return (
                <img
                  className="w-[80px] h-[80px] object-cover opacity-70 hover:opacity-100 cursor-pointer"
                  src={item}
                  key={ind}
                  alt="img here"
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-[14px] text-darkness">
            <span className="cursor-link">{plant.category[0]},</span>
            <span className="cursor-link">{plant.category[1]},</span>
            {plant.category[2] && (
              <span className="cursor-link">{plant.category[2]}</span>
            )}
          </div>
          <h1 className="text-darkness font-Unna text-[26px] mb-3 lg:mb-0">
            {plant.name}
          </h1>
          <div className="flex items-center gap-2">
            <h3 className="text-gray text-[24px] font-bold">{plant.price}</h3>
            <span className="text-[14px] text-gray">+ Free shipping</span>
          </div>
          <p className="single-plant__text">{plant.description}</p>
          <p className="single-plant__text">{plant.text}</p>
          <div className="flex items-center gap-5 pb-3 mb-2 border-b-[1px] border-gray border-opacity-35">
            <input
              className="outline-none w-[50px] border-[1px] border-solid border-gray border-opacity-30 p-2"
              type="number"
              placeholder="1"
            />
            <button
              onClick={() => dispatch(addData({ ...plant, amount: 1 }))}
              className="py-2 px-10 bg-light-green hover:bg-gray text-white text-[12px]"
            >
              Add To Cart
            </button>
          </div>
          <div>
            <span className="mr-2">Categories:</span>
            {plant.category.map((item, ind) => {
              return (
                <NavLink className="cursor-link mr-1" key={ind}>
                  {item},
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
