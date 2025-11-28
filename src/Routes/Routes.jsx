import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayouts from "../Layouts/RootLayouts";
import Coverage from "../Pages/RoutePages/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import Rider from "../Pages/RoutePages/Rider";
import PrivateRoute from "./PrivateRoute";
import PricingCalculator from "../Pages/RoutePages/PricingCalculator";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/bearider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
      },
      {
        path: "Coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "Pricing",
        Component: PricingCalculator
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
