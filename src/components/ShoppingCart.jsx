import { useState } from "react";
import { IoMdClose } from "react-icons/io";
function ShoppingCart() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full md:w-[75%] lg:w-[40%] absolute right-0 top-0 bottom-0 z-50 bg-white">
      <div className="flex items-center justify-between border-b-[1px] border-gray border-opacity-35 w-full py-5 px-4">
        <h3>Shopping Cart</h3>
        <IoMdClose className="text-xl cursor-pointer" />
      </div>
      <div className="flex items-center justify-center p-5">
        <span className="text-[15px] ">No products in the cart.</span>
      </div>
      <button className="bg-light-green hover:bg-gray text-white text-[13px] w-[90%] px-5 py-4 mb-3">
        Continue Shopping
      </button>
    </div>
  );
}

export default ShoppingCart;
