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

const myRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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