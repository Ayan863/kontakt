import React, { useState } from "react";
import "../../Basket/basket.css";
import { GoX } from "react-icons/go";

const BasketModal = ({ onClose, onAddItems }) => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (id, price) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddItems = () => {
    const itemsToAdd = Object.keys(selectedItems)
      .filter((key) => selectedItems[key])
      .map((key) => ({
        id: key,
        price: parseInt(key) * 10, 
        count: 1,
      }));

    onAddItems(itemsToAdd);
    onClose();
  };

  return (
    <div className="generalModal ">
      <div className="modalBasket bg-bgColor pl-4 pr-4">
        <div className="flex bg-white py-3 items-center justify-between">
          <span>Zemanet</span>
          <i className="cursor-pointer" onClick={onClose}><GoX /></i>
        </div>
        <ul className="p-3">
          <div className="flex items-center justify-between">
          <li className="py-3 flex items-center gap-2">
              <input onChange={()=> handleCheckboxChange("1",30)} type="checkbox" />
              <span>Zemanet + 1 il</span>
            </li>
            <span>30₼</span>
          </div>
          <div className="flex items-center justify-between">
            <li className="py-3 flex items-center gap-2">
              <input onChange={()=> handleCheckboxChange("2",50)} type="checkbox" />
              <span>Zemanet + 2 il</span>
            </li>
            <span>50₼</span>
          </div>
          <div className="flex items-center justify-between">
            <li className="py-3 flex items-center gap-2">
              <input onChange={()=> handleCheckboxChange("3",70)} type="checkbox" />
              <span>Zemanet + 3 il</span>
            </li>
            <span>70₼</span>
          </div>
          <div className="flex items-center justify-between">
            <li className="py-3 flex items-center gap-2">
              <input onChange={()=> handleCheckboxChange("4",35)} type="checkbox" />
              <span>EXTRA DEYISDIRILME ZEMANETI 1IL</span>
            </li>
            <span>35₼</span>
          </div>
          <div className="flex items-center justify-between">
            <li className="py-3 flex items-center gap-2">
              <input onChange={()=> handleCheckboxChange("5",75)} type="checkbox" />
              <span>QIZIL ZEMANET ULTRA 1IL (KONTAKT)</span>
            </li>
            <span>75₼</span>
          </div>
        </ul>
        <button
          className="py-3 mb-3 flex justify-center items-center w-full rounded-lg text-white bg-fpriceColor"
          onClick={handleAddItems} 
        >
          Elave Etmek
        </button>
      </div>
    </div>
  );
};

export default BasketModal;