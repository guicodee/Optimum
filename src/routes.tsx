import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import CatalogCars from "./pages/RentalCarsCatalog";
import { SingleCarModel } from "./pages/SingleCarModel";

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
      element: <SingleCarModel />, 
    },
])