import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { GoX } from "react-icons/go";
import {
  removeFromBasket,
  increment,
  decrement,
} from "../../../features/Basket/BasketSlider";
import "../../../Page/home.css";
import BasketModal from "../ModalBaket/BasketModal";

const BasketProduct = () => {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [selectedItemId, setSelectedItemId] = useState(null); // State for selected item ID
  
  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const getWarrantModal = (id) => {
    setSelectedItemId(id); 
    setModalVisible(true); 
  };

  const closeModal = () => {
    setModalVisible(false); 
    setSelectedItemId(null); 
  };

  return (
    <div>
      {basket.length === 0 ? (
        <div className="nothing">Your basket is empty.</div>
      ) : (
        basket.map(
          (item) =>
            item && (
              <div
                className="pl-4 basketsInfo flex h-32 items-center border-b border-linet pb-2"
                key={item.id}
              >
                <input
                  type="checkbox"
                  className="border-b-black-50 pb-4"
                  checked={checkedItems[item.id] || false}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <div className="infos w-full flex items-center justify-between gap-4">
                  <img className="w-20" src={item?.image} alt={item?.title} />
                  <div className="texts w-productWidth flex flex-col gap-6">
                    <p className="font-medium">{item?.title}</p>
                    <button
                      className="warranty flex items-center gap-1 w-28 justify-center rounded-md h-8 bg-buttonColor"
                      onClick={() => getWarrantModal(item.id)}
                    >
                      <IoIosAddCircleOutline />
                      <span>Zemanet</span>
                    </button>
                  </div>
                  <div className="systems flex gap-8 justify-between w-countWidth">
                    <div className="counter flex items-center gap-5">
                      <CiCircleMinus
                        onClick={() => dispatch(decrement({ id: item.id }))}
                        className="text-gray-700 text-2xl cursor-pointer"
                      />
                      <span>{item?.count}</span>
                      <CiCirclePlus
                        onClick={() => dispatch(increment({ id: item.id }))}
                        className="text-gray-700 text-2xl cursor-pointer"
                      />
                    </div>
                    <div className="priceProduct flex items-baseline text-sm gap-1.5">
                      <span className="font-bold text-fpriceColor text-lg">
                        {item.lastPrice}₼
                      </span>
                      <span className="font-bold text-gray-500 line-through">
                        {item.firstPrice}₼
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(removeFromBasket({ id: item.id }))
                      }
                      className="text-gray-500 pr-4 text-lg"
                    >
                      <GoX />
                    </button>
                  </div>
                </div>
              </div>
            )
        )
      )}
      {isModalVisible && <BasketModal onClose={closeModal} itemId={selectedItemId} />} {/* Render modal conditionally */}
    </div>
  );
};

export default BasketProduct;
``