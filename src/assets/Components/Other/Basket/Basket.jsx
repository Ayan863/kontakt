import React from "react";
import BasketProduct from "./BasketProduct/BasketProduct";
import UpFeature from "./UpBasket/UpFeature";
import BasketRight from "./BasketRight/BasketRight";
import { useSelector } from "react-redux";
import BasketNothing from "./Nothing/BasketNothing";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basket) || []; 
  const hasItems = basket.length > 0; 

  return (
    <section className="flex w-full justify-center">
      <div className="flex w-sect gap-3 h-full">
        <div className={!hasItems ? "w-full" : "basketPageLeft w-3/4 flex flex-col gap-2"}>
          <div className="upFeature">
            <UpFeature />
            
          </div>
          <div className="downFeature bg-white rounded-lg">
            {!hasItems ? <BasketNothing/> : <BasketProduct />}
          </div>
        </div>
        <div className={!hasItems ? "hidden" : "basketPageRight h-screen w-1/3 bg-white"}>
          <BasketRight />
        </div>
      </div>
    </section>
  );
};

export default Basket;