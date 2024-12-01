import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCoffee",
        element: (
          <PrivetRoute>
            <AddCoffee></AddCoffee>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-ashy.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-ashy.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        element: (
          <PrivetRoute>
            <Users></Users>
          </PrivetRoute>
        ),
        loader: () =>
          fetch("https://espresso-emporium-server-ashy.vercel.app/users"),
      },
    ],
  },
]);

export default router;
