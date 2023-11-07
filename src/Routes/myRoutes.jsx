import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFood from "../Pages/ManageFood/ManageFood";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import SingleFood from "../Pages/SingleFood/SingleFood";

const myRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/featured-foods')
            },
            {
                path : 'available-food',
                element: <AvailableFood></AvailableFood>
            },
            {
                path : 'add-food',
                element: <AddFood></AddFood>
            },
            {
                path : 'manage-food',
                element: <ManageFood></ManageFood>
            },
            {
                path : 'food-reqs',
                element: <FoodRequest></FoodRequest>
            },
            {
                path: 'food/:id',
                element: <SingleFood></SingleFood>,
                loader: ({params})=> fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },{
                path : 'sign-up',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default myRoutes;