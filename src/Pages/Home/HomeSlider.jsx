import { Link } from "react-router-dom";
import homebanner from '../../assets/images/homebanner.jpg'

const HomeSlider = () => {
    return (
      <div
              className="hero rounded-sm"
              style={{
                backgroundImage: `url(${homebanner})`,
                height:'600px',
                backgroundSize: 'cover'
              }}
            >
              <div className="hero-overlay bg-black bg-opacity-40 rounded-sm"></div>
              <div className="hero-content text-[#fff] text-center ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    <span className="text-yellow ">This is a title</span>{" "}
                  </h1>
                  <p className="mb-5">This is one paragraph</p>
                  <Link to={"/"}>
                    {/* <PrimaryBtn text={"Get Started"}></PrimaryBtn> */}
                  </Link>
                </div>
              </div>
            </div>

    );
};

export default HomeSlider;