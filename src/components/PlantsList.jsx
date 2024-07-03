import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addData } from "../redux/basket/BasketSlice";
function PlantsList({ plant }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-start">
      <div className="relative plant-card">
        <NavLink to={`/plant/${plant.id}`}>
          <img
            className="w-full md:max-w-[230px] lg:max-w-[400px] h-auto mb-3 lg:gap-5 cursor-pointer object-cover"
            src={plant.image}
            alt={plant.name}
          />
        </NavLink>
        <div className="shopping-bag absolute top-[20px] right-[20px] w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
          <FaShoppingBag
            onClick={() => dispatch(addData(plant))}
            className="text-gray hover:text-darkness text-xl "
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center text-gray cursor-pointer">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <NavLink
          to={`/plant/${plant.id}`}
          className="font-Unna text-[16px] text-darkness cursor-pointer"
        >
          {plant.name}
        </NavLink>
        <span className="text-[13px] text-gray">{plant.category[0]}</span>
        <h2 className="text-[15px] text-darkness font-bold leading-[1.3]">
          ${plant.price}
        </h2>
      </div>
    </div>
  );
}

export default PlantsList;
