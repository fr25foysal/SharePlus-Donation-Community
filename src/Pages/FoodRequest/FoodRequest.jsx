import { useEffect, useState } from "react";
import WithContainer from "../../Components/WidthContainer/WithContainer";
import axios from "axios";
import ReqCard from "./ReqCard";
import useProvider from "../../Hooks/useProvider";

const FoodRequest = () => {
    const {user} = useProvider()
    const [foods,setFoods] = useState([])
    useEffect(()=>{
        axios.get(`/requested-foods?email=${user.email}`)
        .then((d)=>{
           setFoods(d.data)
        } )
        
    },[user.email])
    return (
      <div className="">
        <div className="text-4xl bg-accent text-center p-10 font-semibold uppercase text-white">
          <h2>My Food Requests</h2>
          <div className="divider w-[130px] m-2 bg-white h-1 rounded-sm mx-auto"></div>
        </div>
        <div className="bg-secondary pt-8">
          <WithContainer>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-5 pb-10">
            {
                foods.map(food=><ReqCard key={food._id} food={food}></ReqCard>)
            }
          </div>
          </WithContainer>
        </div>
      </div>
    );
};

export default FoodRequest;