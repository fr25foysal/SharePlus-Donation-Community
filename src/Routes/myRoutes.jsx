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
import PrivateRoute from "./PrivateRoute";

const myRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://shareplus-backend.vercel.app/featured-foods')
            },
            {
                path : 'available-food',
                element: <AvailableFood></AvailableFood>
            },
            {
                path : 'add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute> 
            },
            {
                path : 'manage-food',
                element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute> 
            },
            {
                path : 'food-reqs',
                element:<PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>            
            },
            {
                path: 'food/:id',
                element:<PrivateRoute><SingleFood></SingleFood></PrivateRoute> ,
                loader: ({params})=> fetch(`https://shareplus-backend.vercel.app/${params.id}`)
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