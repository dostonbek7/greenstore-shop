import { FaLock, FaBox, FaHandHoldingHeart } from "react-icons/fa";

function Category() {
  return (
    <div className="site-container">
      <div className="flex flex-col gap-6 md:gap-3 md:flex-row items-center md:items-start justify-between pb-20">
        <div className="category-card gap-2 md:flex-row sm:max-w-[411px] md:max-w-[206px] lg:max-w-[360px]">
          <div className="bg-light-green w-[44px] h-[44px] p-4 rounded-full flex items-center justify-center">
            <FaLock className="text-white"/>
          </div>
          <div className="category-card md:items-start">
            <h5 className="font-Unna md:text-[20px]">SECURE PAYMENT</h5>
            <p className="text-gray">Curabitur interdum, nisl at tincidunt.</p>
          </div>
        </div>
        <div className="category-card gap-2 md:flex-row sm:max-w-[411px] md:max-w-[206px] lg:max-w-[360px]">
          <div className="bg-light-green w-[44px] h-[44px] md:w-[52px] md:h-[52px] md:p-5 p-4 rounded-full flex items-center justify-center">
            <FaBox className="text-white" />
          </div>
          <div className="category-card md:items-start">
            <h5 className="font-Unna md:text-[20px]">DELIVERED WITH CARE</h5>
            <p className="text-gray">Donec sit amet neque id nisl.</p>
          </div>
        </div>
        <div className="category-card gap-2 md:flex-row sm:max-w-[411px] md:max-w-[206px] lg:max-w-[360px]">
          <div className="bg-light-green w-[44px] h-[44px] p-4 rounded-full flex items-center justify-center">
            <FaHandHoldingHeart className="text-white" />
          </div>
          <div className="category-card md:items-start">
            <h5 className="font-Unna md:text-[20px] text-nowrap">EXCELLENT SERVICE</h5>
            <p className="text-gray">Amet neque id nisl ullamcorper.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
