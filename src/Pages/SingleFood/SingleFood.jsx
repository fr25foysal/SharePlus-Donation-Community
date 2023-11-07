import {useLoaderData } from "react-router-dom";
import WithContainer from "../../Components/WidthContainer/WithContainer";
import { FaLocationDot } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import HomefeaturedFood from "../Home/HomefeaturedFood";
import useProvider from "../../Hooks/useProvider";

const SingleFood = () => {
  const {user,successNotify,errorNotify} = useProvider()
  const food = useLoaderData();
  const currentDate = new Date()
  const date = String(currentDate.getDate()).padStart(2,"0")
  const month = String(currentDate.getMonth()+1).padStart(2,'0')
  const year = currentDate.getFullYear()
  const UserEmail = user?.email
  const RequestDate = `${year}-${month}-${date}`

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
    axios.get(`/featured-foods-sidebar`)
    .then(d=>{
        setFoods(d.data)
    })},[])

    const handleRequest=(e)=>{
      e.preventDefault()
      
      const AditionalNote = e.target.description.value
      const DonationMoney = e.target.money.value

      const requestData = {FoodName,FoodImage,DonatorEmail,DonatorName,DonatorImage,FoodStatus,UserEmail,ExpiredDate,PickupLocation,RequestDate,AditionalNote,DonationMoney}
      
      axios.post('/req-food',requestData)
      .then(d=>{
        console.log(d);
        successNotify('Request Successful')
        e.target.reset()
      })
      .catch(e=>{
        console.error(e.message);
        errorNotify("Something went wrong!")
      })
    }
  return (
    <div className="bg-secondary py-10">
      <WithContainer>
        <div className="flex  gap-7">
          <div className="w-2/3 bg-white rounded-sm p-5 space-y-5">
            {/* Donator Information  */}
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

            {/* Food Section  */}
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
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      to={""}
                      className="bg-accent px-5 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent py-2 rounded-sm text-white"
                    >
                      Request
                    </button>

{/* Modal */}
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box bg-white rounded-sm">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>

                        <h2 className="text-center text-2xl font-semibold">
                          Request The Food
                        </h2>
                        <div className="divider bg-accent m-2 h-1 rounded w-1/4 mx-auto"></div>
{/* Modal Form */}
                        <form onSubmit={handleRequest} className="mt-7">
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="text"
                              name="description"
                              id="floating_repeat_password"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accent peer"
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor="floating_repeat_password"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Additional Notes
                            </label>
                          </div>

                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              type="number"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              name="money"
                              id="floating_phone"
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accent peer"
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor="floating_first_name"
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Donation Money
                            </label>
                          </div>
                          <div className="mx-auto w-1/4">
                            <button type="submit" className="bg-accent px-5 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent py-2 rounded-sm text-white">
                            Request
                          </button>
                          </div>
                          
                        </form>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 hidden lg:block rounded-sm p-5 bg-white">
            <div className="bg-secondary p-5">
              <h2 className="text-2xl mb-5 font-semibold text-center">
                More Foods
              </h2>
              <div className="grid gap-4">
                {foods.map((food) => (
                  <HomefeaturedFood
                    key={food._id}
                    food={food}
                  ></HomefeaturedFood>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WithContainer>
    </div>
  );
};

export default SingleFood;