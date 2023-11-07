import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const food = useLoaderData()
    console.log(food);
    return (
        <div>
           <h2>Hello</h2>
        </div>
    );
};

export default SingleFood;