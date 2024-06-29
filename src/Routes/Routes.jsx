import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePageLayout from "../Pages/HomePage/HomePageLayout";
import MenuPageLayout from "../Pages/MenuPage/MenuPageLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
      {
        path: "/menu",
        element: <MenuPageLayout></MenuPageLayout>
      }
    ],
  },
]);
