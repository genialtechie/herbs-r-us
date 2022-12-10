import React, { useEffect, useState } from 'react';
import { useCart } from '../../utils/CartContext';
import close from '../../public/close.svg';
import Image from 'next/image';

const Cart = () => {
  const { state, dispatch, cartOpen, setCartOpen } = useCart();
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    cartOpen
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  });
  return (
    cartOpen && (
      <div className="h-full container bg-slate-800/30 fixed inset-x-0 inset-y-0 z-50 grid grid-cols-1 lg:grid-cols-3">
        <div
          onClick={() => setCartOpen(false)}
          className="hidden lg:block bg-transparent opacity-0 lg:col-span-2 cursor-pointer"
        ></div>
        <div className="p-10 bg-white relative opacity-100 overflow-y-auto">
          <Image
            src={close}
            alt="close"
            width={20}
            height={20}
            className="cursor-pointer float-right scale-150"
            onClick={() => setCartOpen(false)}
          />
          <h2 className="text-3xl font-bold mb-10">My Cart</h2>
          <div>
            {state.cart.map((item) => (
              <div
                key={item.id}
                className=""
              >
                <Image
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  className="cursor-pointer float-right scale-75"
                  onClick={() => {
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: { ...item },
                    });
                    state.cart.length == 1 && setCartOpen(false);
                  }}
                />
                <div className="flex flex-row mb-2">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="mr-5"
                  />
                  <span>
                    <h1 className="text-xl font-bold mb-5">{item.name}</h1>
                    <div>
                      <div className="custom-number-input h-fit w-32">
                        <div className="flex flex-row h-10 w-full rounded-sm relative bg-transparent mt-1">
                          <button
                            onClick={() => {
                              item.quantity > 1 &&
                                dispatch({
                                  type: 'DECREASE_QUANTITY',
                                  payload: { ...item },
                                });
                            }}
                            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-sm cursor-pointer outline-none"
                          >
                            <span className="m-auto text-2xl font-thin">−</span>
                          </button>
                          <div className="text-center w-fit bg-gray-300 font-semibold text-md hover:text-black text-gray-700 flex items-center px-2">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => {
                              item.quantity < 5 &&
                                dispatch({
                                  type: 'INCREASE_QUANTITY',
                                  payload: { ...item },
                                });
                            }}
                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-sm cursor-pointer"
                          >
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span className="ml-4 mb-6">${item.price}</span>
                </div>
                <div className="p-1 px-4 w-full border-b-2 border-custom-theme">
                  {item.rentalDate.toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5">
            <hr className="bg-custom-theme h-1 mb-5" />
            <div className="flex flex-row justify-between mb-2">
              <h1 className="text-xl font-bold">Subtotal</h1>
              <span>
                $
                {state.cart.reduce((accumulator, obj) => {
                  return accumulator + obj.price * obj.quantity;
                }, 0)}
              </span>
            </div>
            <div className="flex flex-row justify-between mb-2">
              <span className="text-lg">Taxes</span>
              <span>Calculated at checkout</span>
            </div>
            <button
              type="submit"
              className="w-full bg-custom-theme text-white my-2 lg:my-4 transition duration-300 ease-in-out block hover:bg-gray-400 hover:text-custom-theme py-4 px-8 rounded-sm"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Cart;
