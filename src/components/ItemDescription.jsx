import { NavLink } from "react-router-dom";
import { FaRegDotCircle } from "react-icons/fa";
function ItemDescription() {
  return (
    <div className="site-container">
      <div className="flex flex-col md:flex-row md:gap-5 items-start mb-5">
        <NavLink className="single-plant__link md:border-t-[4px] md:border-darkness">
          Description
        </NavLink>
        <NavLink className="single-plant__link">Reviews(0)</NavLink>
      </div>
      <div>
        <h3 className="text-Unna text-[24px] md:text-[28px] text-darkness leading-[1.3] mb-5">
          Maecenas efficitur ornare massa.
        </h3>
        <h5 className="text-[16px] md:text-[18px] font-Unna text-darkness mb-2">
          Duis auctor nisl vitae purus interdum, quis congue lacus rutrum.
        </h5>
        <p className="text-[14px] md:text-[15px] text-gray mb-5 lg:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis
          auctor, molestie lectus vitae, elementum orci. In et nunc consequat,
          semper tellus eget, euismod quam.
        </p>
      </div>
      <div className="single-plant p-10 md:py-[100px] md:pl-[10px] lg:py-[120px] lg:pr-[50px] mb-5 flex items-center justify-end">
        <div className="ml-auto max-w-[210px] md:max-w-[350px]">
          <h6 className="text-[14px] lg:text-[18px] font-Unna text-darkness">
            Nunc tempus
          </h6>
          <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-Unna text-darkness">
            Duis vel ipsum vitae est semper varius.
          </h3>
          <h4 className="text-[24px] md:text-[22px] font-Unna text-darkness">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-10 gap-6">
        <h3 className="text-darkness font-Unna text-[24px] leading-[1.3] self-start justify-self-start">
          Sad Plants Signs
        </h3>
        <div className="pb-10 md:w-[400px] lg:w-[550px]">
          <div className="single-plant__div">
            <FaRegDotCircle className="text-gray" />
            <span className="single-plant_text">
              Duis vel ipsum vitae est semper varius in id
            </span>
          </div>
          <div className="single-plant__div pt-3">
            <FaRegDotCircle className="text-gray" />
            <span className="single-plant_text">
              Class aptent taciti sociosqu
            </span>
          </div>
          <div className="single-plant__div pt-3">
            <FaRegDotCircle className="text-gray" />
            <span className="single-plant_text">
              Litora torquent per conubia nostra per
            </span>
          </div>
          <div className="single-plant__div pt-3">
            <FaRegDotCircle className="text-gray" />
            <span className="single-plant_text">
              Inceptos himenaeos praesent
            </span>
          </div>
          <div className="single-plant__div pt-3">
            <FaRegDotCircle className="text-gray" />
            <span className="single-plant_text">Fermentum elit eget</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDescription;
