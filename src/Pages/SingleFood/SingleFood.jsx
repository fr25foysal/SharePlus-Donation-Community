import { Link, useLoaderData } from "react-router-dom";
import WithContainer from "../../Components/WidthContainer/WithContainer";
import { FaLocationDot } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import HomefeaturedFood from "../Home/HomefeaturedFood";

const SingleFood = () => {
  const food = useLoaderData();
  const {
    _id,
    FoodName,
    FoodImage,
    FoodQuantity,
    PickupLocation,
    ExpiredDate,
    AdditionalNotes,
    DonatorImage,
    DonatorName,
    DonatorEmail,
    FoodStatus,
  } = food;

  const [foods,setFoods] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/featured-foods-sidebar`)
    .then(d=>{
        setFoods(d.data)
    })},[])
  return (
    <div className="bg-secondary py-10">
      <WithContainer>
        <div className="flex  gap-7">
          <div className="w-2/3 bg-white rounded-sm p-5 space-y-5">
            <div className="bg-secondary p-5">
              <div className="flex space-x-4">
                <img
                  className="w-20  h-20 object-cover object-top"
                  src={DonatorImage}
                  alt=""
                />
                <div className="items-center flex">
                  <div>
                    <h2 className="text-[20px] font-semibold flex items-center gap-2">
                      <BiSolidDonateHeart></BiSolidDonateHeart> Donor:
                    </h2>
                    <h2 className="text-[20px] font-semibold text-neutral">
                      {DonatorName}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-5">
              <div className="flex space-x-4">
                <img
                  className="object-cover w-1/2 object-top"
                  src={FoodImage}
                  alt=""
                />
                <div className="w-1/2 pl-5 flex items-center">
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral">
                      Food: {FoodName}
                    </h2>
                    <h2 className="mb-4 font-semibold text-neutral">
                      {AdditionalNotes}
                    </h2>
                    <p className="font-semibold text-sm text-neutral">
                      <span className="font-semibold  text-base mr-2">
                        <FaLocationDot className="text-accent inline mr-1 text-base"></FaLocationDot>
                        {"Location: "}
                      </span>
                      {PickupLocation}
                    </p>

                    <p className="font-semibold text-sm text-neutral py-1">
                      <span className="font-semibold  text-base mr-2">
                        <MdProductionQuantityLimits className="text-accent inline"></MdProductionQuantityLimits>{" "}
                        Quantity:
                      </span>
                      {FoodQuantity}
                    </p>

                    <p className="font-semibold text-sm text-neutral mb-8">
                      <span className="font-semibold  text-base mr-2">
                        <FcExpired className="text-accent inline mr-1 text-base"></FcExpired>
                        {"Expire Date: "}
                      </span>
                      {ExpiredDate}
                    </p>
                    <Link
                      to={"/login"}
                      className="bg-accent px-5 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent py-2 rounded-sm text-white"
                    >
                      Request
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 hidden lg:block rounded-sm p-5 bg-white">
            <div className="bg-secondary p-5">
              <h2 className="text-2xl mb-5 font-semibold text-center">
                Featured Foods
              </h2>
              <div className="grid gap-4">
            {
                foods.map(food=><HomefeaturedFood key={food._id} food={food}></HomefeaturedFood>)
            }
          </div>
            </div>
          </div>
        </div>
      </WithContainer>
    </div>
  );
};

export default SingleFood;