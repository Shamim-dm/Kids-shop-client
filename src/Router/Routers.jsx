import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/Home/Home/ToyDetails/ToyDetails";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Blogs from "../Pages/Sheared/Blogs/Blogs";

import AddToys from "../Pages/Toys/AddToys/AddToys";
import AllToys from "../Pages/Toys/AllToys/AllToys";
import MyToys from "../Pages/Toys/MyToys/MyToys";
import UpdateToys from "../Pages/Toys/MyToys/UpdateToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products"),
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
        element: <AddToys></AddToys>,
        loader: () => fetch("http://localhost:5000/addProducts"),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
        loader: () => fetch("http://localhost:5000/addProducts"),
      },

      {
        path: "myToys/:id",
        element: <MyToys></MyToys>,
        loader: ({params}) => fetch(`http://localhost:5000/addProducts/${params.id}`)
      },
      
      {
        path: "ToyDetails",
        element: <ToyDetails></ToyDetails>,
        // loader: ()=> fetch('https://toy-vehicles-server.vercel.app/products')
      },
      {
        path: "updateToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({params}) => fetch(`http://localhost:5000/addProducts/${params.id}`)
      },
    ],
  },
]);

export default router;
