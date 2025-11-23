import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayouts from "../Layouts/RootLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: App
      }
    ]
  },
]);