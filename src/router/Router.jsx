import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Home/home";
import About from "../About/about";
import Career from "../Career/career";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/career",
        element:<Career/>
      },
      {
        path: "/register",
        element:<Register/>
      },
      {
        path: "/login",
        element:<Login/>
      },
    ],
  },
]);

export default router;
