import axios from "axios";
import WithContainer from "../../Components/WidthContainer/WithContainer"
import useProvider from "../../Hooks/useProvider";
import { Helmet } from "react-helmet";
import PageTitle from "../../Components/PageTitle";

const AddFood = () => {
    const {user,successNotify} = useProvider()
    const handleSubmit = e =>{
        e.preventDefault()
        // const form = e.target.value
        const FoodName = e.target.name.value 
        const FoodImage = e.target.image.value 
        const AdditionalNotes = e.target.description.value 
        const PickupLocation = e.target.location.value 
        const FoodQuantity = e.target.quantity.value 
        const ExpiredDate = e.target.date.value 
        const FoodStatus = 'available'
        const DonatorEmail = user?.email
        const DonatorName = user?.displayName

        const foodData = {FoodName,FoodImage,AdditionalNotes,PickupLocation ,ExpiredDate, FoodQuantity,FoodStatus,DonatorName,DonatorEmail}

        axios.post('/add-food',foodData)
        .then(()=>{successNotify('Donation Added')})
        .catch(e=>{
            console.error(e.message);
        })
    }
    return (
      <div className="">
        <PageTitle>SharePlus | Add Food</PageTitle>
        <div className="text-4xl bg-accent text-center p-10 font-semibold uppercase text-white">
          <h2>Donate Food</h2>
          <div className="divider w-[130px] m-2 bg-white h-1 rounded-sm mx-auto"></div>
        </div>
        <div className="bg-secondary p-10">
          <WithContainer>
            <div className="">
              <form
                onSubmit={handleSubmit}
                className="p-10 bg-white rounded-sm"
              >
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="name"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-neutral bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accent peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent text-accent peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Food Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="image"
                      id="floating_password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accent peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Food Image URL
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
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
                      type="text"
                      name="location"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accent peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Pickup Location
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="number"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="quantity"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accent peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Food Quantity
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="date"
                      name="date"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accent peer"
                      placeholder=" "
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-accent px-5 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent py-2 rounded-sm text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </WithContainer>
        </div>
      </div>
    );
};

export default AddFood;