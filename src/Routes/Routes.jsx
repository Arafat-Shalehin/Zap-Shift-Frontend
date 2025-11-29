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
import AboutUs from "../Pages/RoutePages/AboutUs";
import Error404 from "../Pages/Shared/Error404";
import SendParcelForm from "../Pages/RoutePages/SendParcelForm";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        path: "*",
        element: <Error404 />,
      },
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
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcelForm></SendParcelForm>
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "Coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "About Us",
        Component: AboutUs,
      },
      {
        path: "Pricing",
        Component: PricingCalculator,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    errorElement: <Error404 />,
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error404/>,
    children: [
      {
        path: "my-parcels",
        Component: MyParcels
      }
    ]
  },
]);
