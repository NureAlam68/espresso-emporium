import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>
            }
        ]
    }
])

export default router