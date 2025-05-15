import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import SubCategory from "../pages/SubCategory/MainSubCategory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>, 
        },
        {
          path: "/category/:url",
          element: <SubCategory></SubCategory>, 
        }
      ]
    },
  ]);