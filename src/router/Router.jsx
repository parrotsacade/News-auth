import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Home/home";
import About from "../About/about";
import Career from "../Career/career";

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
    ],
  },
]);

export default router;
