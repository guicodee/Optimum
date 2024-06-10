import { createBrowserRouter } from "react-router-dom";
import ModelCarId from "./pages/CatalogCars";
import { Home } from "./pages/Home";

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