import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import CatalogCars from "./pages/CatalogCars";
import { ModelCar } from "./pages/ModelCar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    },
  {
    path: "/cars",
    element: <CatalogCars />,
    },
    {
      path: "/car/:id",
      element: <ModelCar />, 
    },
])