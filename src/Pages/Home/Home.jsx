import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import HomefeaturedFood from "./HomefeaturedFood";
import WithContainer from "../../Components/WidthContainer/WithContainer";


const Home = () => {
      
    const featuredFoods = useLoaderData()
    return (
      <div>
        <HomeSlider></HomeSlider>
        {/* Featured Foods */}
       
        <div className="pt-14 pb-10 b*g-[#46fac16f] bg-secondary">
             <WithContainer>
          <div className="text-4xl text-center pb-10 font-semibold uppercase text-gray-800">
            <h2>Featured Foods</h2>
            <div className="divider w-[130px] m-0 bg-accent h-1 rounded-sm mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-5 pb-10">
            {
                featuredFoods.map(food=><HomefeaturedFood key={food._id} food={food}></HomefeaturedFood>)
            }
           
          </div>
          <div className="w-32 mx-auto">
            <Link to={'/available-food'} className="bg-transparent text-center px-4 border-[3px] transition-all border-accent hover:bg-accent hover:text-white py-2 rounded-sm text-neutral">Show All</Link>
          </div>
           </WithContainer>
        </div>
        
      </div>
    );
};

export default Home;