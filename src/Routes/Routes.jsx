import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import { Children } from "react";
import Home from "../pages/Home/Home/Home";
import Footer from "../pages/Shared/Footer/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        
    ]
  },
]);