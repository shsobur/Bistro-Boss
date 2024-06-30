import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePageLayout from "../Pages/HomePage/HomePageLayout";
import MenuPageLayout from "../Pages/MenuPage/MenuPageLayout";
import OurShopPageLayout from "../Pages/OurShop/OurShopPageLayout";
import SaladRecipeCard from "../Pages/OurShop/SaladRecipeCard/SaladRecipeCard";
import PizzaRecipeCard from "../Pages/OurShop/PizzaRecipeCard/PizzaRecipeCard";
import SoupReceipeCart from "../Pages/OurShop/SoupReceipeCart/SoupReceipeCart";
import DesertRecipeCard from "../Pages/OurShop/DesertRecipeCard/DesertRecipeCard";
import DrinkRecipeCard from "../Pages/OurShop/DrinkRecipeCard/DrinkRecipeCard";

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
        element: <MenuPageLayout></MenuPageLayout>,
      },
      {
        path: "/ourshop",
        element: <OurShopPageLayout></OurShopPageLayout>,
        children: [
          {
            index: true,
            element: <SaladRecipeCard></SaladRecipeCard>,
          },
          {
            path: "pizzaCard",
            element: <PizzaRecipeCard></PizzaRecipeCard>,
          },
          {
            path: "soupCard",
            element: <SoupReceipeCart></SoupReceipeCart>,
          },
          {
            path: "desertCard",
            element: <DesertRecipeCard></DesertRecipeCard>,
          },
          {
            path: "drinkCard",
            element: <DrinkRecipeCard></DrinkRecipeCard>,
          }
        ]
      }
    ],
  },
]);
