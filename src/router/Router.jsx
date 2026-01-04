import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
    ],
  },
]);

export default router;
