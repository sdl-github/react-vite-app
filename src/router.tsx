import { createBrowserRouter } from "react-router-dom"
import Index from "./pages";
import DefaultLayout from "@/layouts/DefaultLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Index />,
            }
        ]
    },
]);