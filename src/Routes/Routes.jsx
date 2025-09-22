import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import { Children } from "react";
import Home from "../pages/Home/Home/Home";
import Footer from "../pages/Shared/Footer/Footer";
import Menu from "../pages/Menu/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'menu',
          element: <Menu></Menu>
        }
        
    ]
  },
]);