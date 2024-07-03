import { LiaTimesCircleSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const { allProduct } = useSelector((store) => store.basket);
  console.log(allProduct);
  return (
    <div className="site-container">
      <div>
        <span></span>
      </div>
      <h1 className="font-Unna text-darkness text-left text-[26px] mb-4">
        Cart
      </h1>
      <div className="flex items-center justify-center max-w-[800px]">
        <form className="">
          <table className="mb-4 border-[1px] border-gray border-opacity-30">
            <thead className="bg-[#fbfbfb] hidden">
              <tr className="block">
                <th className="text-center"></th>
                <th className="text-center"></th>
                <th className="text-center">Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
              </tr>
            </thead>
            {allProduct.map((item, id) => {
              return (
                <tbody className="px-4" key={id}>
                  <tr className="flex flex-col">
                    <td className="flex items-center justify-end mr-3 py-2 border-b-[1px] border-gray border-opacity-30">
                      <LiaTimesCircleSolid className="text-2xl text-gray cursor-pointer" />
                    </td>
                    <td className="flex items-center justify-center px-[14px] py-2">
                      <NavLink>
                        <img
                          className="w-[70px] h-auto"
                          src="./assets/plants-1.jpg"
                          alt=""
                        />
                      </NavLink>
                    </td>
                    <td className="table-td table-td__text">
                      <span>Product</span>
                      <NavLink>Bird of Paradise</NavLink>
                    </td>
                    <td className="table-td table-td__text">
                      <span>Price</span>
                      <span>{item.price}</span>
                    </td>
                    <td className="table-td table-td__text">
                      <span>Quantity</span>
                      <div>
                        <label htmlFor="quantity">
                          <input
                            className="border-[1px] border-gray border-opacity-35 outline-none w-[50px] indent-2"
                            placeholder="1"
                            type="number"
                            id="quantity"
                          />
                        </label>
                      </div>
                    </td>
                    <td className="table-td table-td__text">
                      <span>Subtotal</span>
                      <span>$249.00</span>
                    </td>
                  </tr>
                  <tr className="border-t-[1px] border-gray border-opacity-30">
                    <td className="px-[14px] py-[7px]">
                      <div className="flex items-center gap-2 justify-center py-2">
                        <input
                          className="outline-none indent-3 border-[1px] border-gray border-opacity-30 focus:border-dashed py-[7px] px-[10.5]"
                          type="text"
                          placeholder="Coupon code"
                        />
                        <button
                          className="bg-light-green text-white py-2 px-3 hover:bg-gray"
                          type="submit"
                        >
                          Apply coupon
                        </button>
                      </div>
                      <button
                        className="bg-light-green opacity-50 text-white w-full px-2 hover:bg-[#e6e6e6] hover:text-darkness"
                        type="submit"
                      >
                        Update card
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </form>
      </div>
    </div>
  );
}

export default Cart;
