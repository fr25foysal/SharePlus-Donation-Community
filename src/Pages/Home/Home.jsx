import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import HomefeaturedFood from "./HomefeaturedFood";
import WithContainer from "../../Components/WidthContainer/WithContainer";
import PageTitle from "../../Components/PageTitle";
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Home = () => {
      
    const featuredFoods = useLoaderData()
    return (
      <div>
        <PageTitle>SharePlus | Feed the community</PageTitle>
        <HomeSlider></HomeSlider>
        {/* Donators Section */}
        <div className="pt-14 pb-10 b*g-[#46fac16f] ">
             <WithContainer>
          <div className="text-4xl px-5 text-center pb-10 font-semibold uppercase text-gray-800">
            <h2>Kind Donors</h2>
            <div className="divider w-[130px] m-0 bg-accent h-1 rounded-sm mx-auto"></div>
          </div>

          <motion.div
           variants={container}
            initial="hidden" 
            animate="visible"
            className=" grid lg:grid-cols-8 md:grid-cols-4 gap-6 grid-cols-2 justify-evenl p-5">
            
            {
                featuredFoods.map(food=><motion.div className="mx-auto" variants={item} key={food._id}>
                  <img className="w-28 h-28 bg-white object-cover rounded-full object-top" src={food.DonatorImage} alt="" />
                </motion.div>)
            }
              
          </motion.div>

          </WithContainer>
          </div>
        {/* Featured Foods */}
        <div className="pt-14 pb-10 b*g-[#46fac16f] bg-secondary">
             <WithContainer>
          <div className="text-4xl px-5 text-center pb-10 font-semibold uppercase text-gray-800">
            <h2>Featured Foods</h2>
            <div className="divider w-[130px] m-0 bg-accent h-1 rounded-sm mx-auto"></div>
          </div>
          <motion.div variants={container}
            initial="hidden" 
            animate="visible" className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-5 pb-10">
            {
                featuredFoods.map(food=><HomefeaturedFood  key={food._id} food={food} item={item}></HomefeaturedFood>)
            }
           
          </motion.div>
          <div className="w-32 mx-auto">
            <Link to={'/available-food'} className="bg-transparent text-center px-4 border-[3px] transition-all border-accent hover:bg-accent hover:text-white py-2 rounded-sm text-neutral">Show All</Link>
          </div>
           </WithContainer>
        </div>
        
      </div>
    );
};

export default Home;