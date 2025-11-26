import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayouts from "../Layouts/RootLayouts";
import Coverage from "../Pages/Home/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path: "Coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json())
      }
    ]
  },
]);