import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { RentalCarsCatalog } from "./pages/RentalCarsCatalog";
import { SingleCarModel } from "./pages/SingleCarModel";
import { SignIn } from "./pages/Sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    },
  {
  path: "/cars",
  element: <RentalCarsCatalog />,
  },
  {
    path: "/car/:id",
    element: <SingleCarModel />, 
  },
  {
    path: "/sign-in",
    element: <SignIn />, 
  },
])