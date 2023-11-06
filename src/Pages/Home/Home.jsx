
import { useLoaderData } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import HomefeaturedFood from "./HomefeaturedFood";

const Home = () => {
    const featuredFoods = useLoaderData()
    return (
      <div>
        <HomeSlider></HomeSlider>
        {/* Featured Foods */}
        <div className="pt-14 pb-10 bg-[#46fac16f]">
          <div className="text-4xl text-center pb-10 font-semibold uppercase text-gray-800">
            <h2>Featured Foods</h2>
            <div className="divider w-[130px] m-0 bg-accent h-1 rounded-sm mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 px-5">
            {
                featuredFoods.map(food=><HomefeaturedFood key={food._id} food={food}></HomefeaturedFood>)
            }
          </div>
        </div>
      </div>
    );
};

export default Home;