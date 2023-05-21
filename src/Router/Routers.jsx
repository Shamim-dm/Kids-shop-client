import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/Home/Home/ToyDetails/ToyDetails";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Blogs from "../Pages/Sheared/Blogs/Blogs";

import AddToys from "../Pages/Toys/AddToys/AddToys";
import AllToyDetails from "../Pages/Toys/AllToys/AllToyDetails";
import AllToys from "../Pages/Toys/AllToys/AllToys";
import MyToys from "../Pages/Toys/MyToys/MyToys";
import UpdateToys from "../Pages/Toys/MyToys/UpdateToys";
import PrivateRouters from "./PrivateRouters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://toy-vehicles-server-shamim-dm.vercel.app/products"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "addToys",
        element: <PrivateRouters><AddToys></AddToys></PrivateRouters>,
        loader: () => fetch("https://toy-vehicles-server-shamim-dm.vercel.app/addProducts"),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toy-vehicles-server-shamim-dm.vercel.app/addProducts"),
      },
      {
      path: "allToysDetails/:_id",
      element:<AllToyDetails></AllToyDetails>,
      loader: ({params}) => fetch(`https://toy-vehicles-server-shamim-dm.vercel.app/${params._id}`)
       },
      {
        path: "myToys",
        element: <PrivateRouters><MyToys></MyToys></PrivateRouters>,
        loader: () => fetch("https://toy-vehicles-server-shamim-dm.vercel.app/addProducts")
      },

      // {
      //   path: "myToys/:id",
      //   element: <MyToys></MyToys>,
      //   loader: ({params}) => fetch(`http://localhost:5000/addProducts/${params.id}`)
      // },
      
      {
        path: "ToyDetails/:_id",
        element: <PrivateRouters><ToyDetails></ToyDetails></PrivateRouters>,
        loader: ({params}) => fetch(`https://toy-vehicles-server-shamim-dm.vercel.app/products/${params._id}`)
        
      },
      {
        path: "updateToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({params}) => fetch(`https://toy-vehicles-server-shamim-dm.vercel.app/addProducts/${params.id}`)
      },
    ],
  },
]);

export default router;
