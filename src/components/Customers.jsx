import { FaQuoteLeft } from "react-icons/fa6";

function Customers() {
  return (
    <div className="site-container">
      <div className="py-20">
        <h1 className="relative customers-title text-center font-Unna text-[32px] text-darkness mb-5">
          What Our Customers Say
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10">
          <div className="category-card">
            <FaQuoteLeft className="text-snow-green text-3xl md:mb-4" />
            <p className="text-center text-darkness mb-5 text-[16px] font-medium lg:text-[18px]">
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <img
              className="w-10 h-10 rounded-full object-cover mb-5"
              src="./assets/testimonals-1.jpg"
              alt="customers img"
            />
            <h4 className="text-gray text-[12px] tracking-[2px] font-semibold">JENNIFER LEWIS</h4>
          </div>
          <div className="category-card">
            <FaQuoteLeft className="text-snow-green text-3xl md:mb-4" />
            <p className="text-center text-darkness mb-5 text-[16px] font-medium lg:text-[18px]">
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <img
              className="w-10 h-10 rounded-full object-cover mb-5"
              src="./assets/testimonals-2.jpg"
              alt="customers img"
            />
            <h4 className="text-gray text-[12px] tracking-[2px] font-semibold">ALICIA HEART</h4>
          </div>
          <div className="category-card">
            <FaQuoteLeft className="text-snow-green text-3xl md:mb-4" />
            <p className="text-center text-darkness mb-5 text-[16px] font-medium lg:text-[18px]">
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <img
              className="w-10 h-10 rounded-full object-cover mb-5"
              src="./assets/testimonals-3.jpg"
              alt="customers img"
            />
            <h4 className="text-gray text-[12px] tracking-[2px] font-semibold">JUAN CARLOS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
