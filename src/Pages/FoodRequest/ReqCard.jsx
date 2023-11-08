import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import useProvider from "../../Hooks/useProvider";

const ReqCard = ({food,handleCancel}) => {
  const {successNotify,errorNotify} = useProvider()
    
  const {_id,RequestDate,DonationMoney, FoodName, FoodImage, PickupLocation, ExpiredDate, DonatorImage, DonatorName, FoodStatus} = food
  const handelNoCancel=()=>{
    errorNotify('Item Delivered')
  }
  return (
    <div className=" rounded-sm text-neutral shadow- bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <img
            src={DonatorImage}
            alt={DonatorName}
            className="object-cover object-top w-12 h-12 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="">
            <h2 className="text-sm font-semibold">{DonatorName}</h2>
          </div>
        </div>

        <div>
          <p className="text-center text-sm text-accent font-semibold capitalize">
            {FoodStatus}
          </p>
        </div>
      </div>
      <img
        src={FoodImage}
        alt={FoodName}
        className="object-cover object-center w-full h-64  dark:bg-gray-500"
      />
      <div className="p-3 flex flex-col">
        <div className="pt-2 pb-2 grow-0">
          <div className="flex justify-between text-sm items-center">
            <h2 className="text-[16px] text-accent font-semibold">
              {FoodName}
            </h2>
            <p>
              <span className="font-semibold">Donated: </span>
              {DonationMoney} $
            </p>
          </div>
        </div>

        <div className=" items-stretch">
          <p>
            <span className="font-semibold text-sm">
              <FaLocationDot className="text-accent inline mr-1 text-base"></FaLocationDot>{" "}
            </span>
            {PickupLocation}
          </p>
        </div>

        <div className="flex pt-2 justify-between text-sm items-center">
          <button onClick={
            (FoodStatus === "available") ?
            ()=>handleCancel(_id)
          :
          handelNoCancel
          } className="bg-accent px-4 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent py-2 rounded-sm text-white">
            Cancel
          </button>
          <div>
            <p>
              <span className="font-semibold">Requested: </span>
              {RequestDate}
            </p>
            <p>
              <span className="font-semibold">Expires: </span>
              {ExpiredDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ReqCard;