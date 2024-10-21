import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../../features/Basket/BasketSlider";
const UpFeature = () => {
  const basket = useSelector((state) => state.basket.basket);
  const hasItem = basket.length > 0;
  const dispatch = useDispatch();

  return (
    <div className="flex items-start flex-col gap-0.5 shadow-sm">
      <div className="basktProductCount bg-white w-full h-16 flex items-center p-3">
        <span>Sebetde ({basket.length} mehsul var)</span>
      </div>
      <div
        className={
          !hasItem
            ? "hidden"
            : "systemsProducts flex items-center h-20 gap-6 p-3 bg-white w-full"
        }
      >
        <button
          style={{ borderRadius: "50px" }}
          className="border p-2 rounded-lg"
        >
          Hamisini sec
        </button>
        <button
          style={{ borderRadius: "50px" }}
          className="flex items-center gap-1 bg-buttonColor p-2"
        >
          <i className="text-sm">
            <FaRegTrashCan />
          </i>
          <span onClick={() => dispatch(removeAll())}>Secilenleri sil</span>
        </button>
      </div>
    </div>
  );
};

export default UpFeature;
