const OtherCard = ({ image, title, firstPrice, lastPrice, sale }) => {
  return (
    <div>
      <div className="cards font-[Montserrat,sans-serif] bg-white rounded-lg duration-200 p-3 flex w-[680px]">
        <img src={image} alt="phone" className="w-[271px] h-[224px]" />
        <div>
        <div className="description  text-[14px] h-[41px]">{title}</div>
        <div className="cost">
          <span className="sale text-[12px] bg-red-500 p-[3px] rounded-md text-white font-semibold">
            -{sale}₼
          </span>
          <div>
            <del className="firstPrice text-[14px] text-[#777777] font-medium">
              {firstPrice}₼
            </del>
          </div>
          
          <div className="flex justify-between"><div className="lastPrice text-[#ff003c] font-bold">{lastPrice}</div><div className="text-[14px] font-semibold	">0% 12 ay</div></div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default OtherCard
