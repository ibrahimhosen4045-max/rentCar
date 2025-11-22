import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Layout/Home";
import SecHome from "./Layout/SecHome";

import BlogDetails from "./Layout/BlogDetails";
import CarsCard from "./Layout/CarsCard";
import Loging from "./Layout/Loging";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/blog",
                element: <SecHome></SecHome>
            },
            {
                path: "/blog/:id",
                element: <BlogDetails></BlogDetails>
            },
            {
                path: "/cars",
                element: <CarsCard></CarsCard>
            },
            {
                path: "/login",
                element: <Loging></Loging>
            }
           
        ]
        
    }
])
export default router