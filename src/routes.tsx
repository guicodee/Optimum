import { createBrowserRouter } from "react-router-dom";
import ModelCarId from "./pages/catalogCars";
import { Home } from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cars",
    element: <ModelCarId />,
  },
])