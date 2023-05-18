import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/Home/Home/ToyDetails/ToyDetails";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

import AddToys from "../Pages/Toys/AddToys/AddToys";
import AllToys from "../Pages/Toys/AllToys/AllToys";
import MyToys from "../Pages/Toys/MyToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://toy-vehicles-server.vercel.app/products')
            
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path:'addToys',
            element: <AddToys></AddToys>
        },
        {
            path: 'allToys',
            element: <AllToys></AllToys>
        },
        {
            path:'myToys',
            element: <MyToys></MyToys>
        },
        {
            path: 'ToyDetails',
            element: <ToyDetails></ToyDetails>
        }


    ]
  },

]);

export default router;
