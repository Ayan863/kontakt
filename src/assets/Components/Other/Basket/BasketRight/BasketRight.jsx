import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Basket/basket.css";
import BasketModal from "../ModalBaket/BasketModal";

const BasketRight = () => {
  const basket = useSelector((state) => state.basket.basket) || [];
  const hasItems = basket.length > 0;
  const totalPrice = basket.reduce(
    (total, item) => total + item.lastPrice * item.count,
    0
  );
  const totalSale = basket.reduce(
    (total, item) => total + item.sale * item.count,
    0
  );
  
  return (
    <div className="rightBasket">
      <div className="pl-4 m-auto flex justify-between h-20 items-center border-b border-linet pb-2">
        <span className="font-medium">Mehsul:</span>
        <span className="pr-4">{basket.length} mehsul</span>
      </div>
      <div>
        {!hasItems ? (
          <div className="bg-linet"></div>
        ) : (
          basket.map((item) => (
            <div
              className="pl-4 productInfos justify-between flex h-20 items-center border-b border-linet pb-2"
              key={item.id}
            >
              <p className="w-3/5">
                {item.title}{" "}
                <span className="text-red-300">({item.count} eded)</span>{" "}
              </p>
              <div className="priceProducts pr-4 flex flex-col">
                <span className="font-bold text-gray-500 line-through">
                  {item.firstPrice}₼
                </span>
                <span className="font-bold text-fpriceColor text-lg">
                  {item.lastPrice}₼
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="pl-4 m-auto flex flex-col justify-end h-20 items-start border-b border-linet bg-bgColor pb-3">
        <div className="generalPrice flex justify-between w-full">
          <span>Umumi mebleg:</span>
          <span className="pr-4">{totalPrice}₼</span>
        </div>
        <div className="sale flex justify-between w-full">
          <span>Endirim:</span>
          <span className="pr-4 text-fpriceColor">{totalSale}₼</span>
        </div>
      </div>
      <div className="pl-4 pt-2 pb-2  pr-4 finalyPrice flex justify-between w-full bg-bgColor">
        <span className="font-semibold">Yekun mebleg :</span>
        <span className="font-black">{totalPrice - totalSale}₼</span>
      </div>
      <div className="flex flex-col bg-bgColor gap-2">
        <button className="bg-fpriceColor text-white h-16 flex items-center justify-center text-lg rounded-md">Sifarisi Resmilesdir</button>
        <button className="bg-gaain h-16 text-black flex items-center justify-center text-lg rounded-md">Bir klikle al</button>
      </div>
    </div>
  );
};

export default BasketRight;
