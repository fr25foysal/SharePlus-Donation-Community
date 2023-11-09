import axios from "axios";
import WithContainer from "../../Components/WidthContainer/WithContainer";
import { useEffect, useState } from "react";
import HomefeaturedFood from "../Home/HomefeaturedFood";
import PageTitle from "../../Components/PageTitle";

const AvailableFood = () => {
    const [foods,setFoods] = useState([])
    const [search,setSearch] = useState('')
    const [sort,setSort] = useState('')

    // const {data,isPending} = useQuery({
    //     queryKey: ['fooods'],
    //     queryFn: async()=>{
    //       return await axios.get('/foods')
    //     }
    // })

    useEffect(()=>{
    axios.get(`/foods?search=${search}&sort=${sort}`)
    .then(d=>{
        setFoods(d.data)
    })

    // fetch('http://localhost:5000/foods')
    // .then(d=>d.json())
    // .then(data=>{
    //     setFoods(data)
    // })
    },[search,sort])

    const handleSearch=(e) =>{
        e.preventDefault()
        const searchText = e.target.search.value
        setSearch(searchText)
    }

    const handleSort=(e)=>{
        setSort(e.target.value);
    }
    
    return (
      <div className="">
        <PageTitle>SharePlus | Available Foods</PageTitle>
        <div className="text-4xl bg-accent text-center p-10 font-semibold uppercase text-white">
          <h2>Available Foods</h2>
          <div className="divider w-[130px] m-2 bg-white h-1 rounded-sm mx-auto"></div>
        </div>
        <div className="bg-secondary pt-5">
          <WithContainer>
            <div className="py-7 rounded-sm flex md:px-5 px-3 bg-white mx-5 mb-5">
              <form onSubmit={handleSearch} className="flex-1">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute hidden inset-y-0 left-0 md:flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>

                  <input
                    type="search"
                    name="search"
                    id="default-search"
                    className="block w-full p-4 md:pl-10 pl-2 text-sm text-gray-900 border border-accent focus:outline-none rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-accent dark:focus:border-accent"
                    placeholder="Search..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 bottom-2.5 bg-accent top-2 md:px-3 px-1 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent rounded-sm text-white"
                  >
                    Search
                  </button>
                </div>
              </form>
              <div className="flex-1 flex justify-end">
                
                <select
                defaultValue={''}
                onChange={handleSort}
                  id="countries"
                  className="bg-gray-50 border active:border-accent border-accent text-gray-900 text-sm rounded-sm focus:border-accent block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                >
                  <option value="US">Sort by</option>
                  <option value="sort">Expire Date</option>
                </select>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-5 pb-10">
            {
                foods.map(food=><HomefeaturedFood key={food._id} food={food}></HomefeaturedFood>)
            }
          </div>
          </WithContainer>
        </div>
      </div>
    );
};

export default AvailableFood;