import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayouts from "../Layouts/RootLayouts";
import Coverage from "../Pages/RoutePages/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";

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
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      }
    ]
  }
]);