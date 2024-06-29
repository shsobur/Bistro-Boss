/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import MenuPageHeader from "./MenuPageHeader/MenuPageHeader";
import useMenu from "../../Hook/Hook";
import TodayOffer from "./TodayOffer/TodayOffer";
import Desserts from "./Desserts/Desserts";
import DessertMenu from "./DessertMenu/DessertMenu";
import Pizza from "./Pizza/Pizza";
import PizzaMenu from "./PizzaMenu/PizzaMenu";
import Salad from "./Salad/Salad";
import SaladMenu from "./SaladMenu/SaladMenu";
import Soup from "./Soup/Soup";
import SoupMenu from "./SoupMenu/SoupMenu";

const MenuPageLayout = () => {
  const [menu] = useMenu();

  const offered = menu.filter(item => item.category === "offered");
  const dessert = menu.filter(item => item.category === "dessert");
  const pizza = menu.filter(item => item.category === "pizza");
  const salad = menu.filter(item => item.category === "salad");
  const soup = menu.filter(item => item.category === "soup");

  console.log(salad);

  return (
    <div>
      <Helmet>
        <title>Bostro Boss Restaurant | Menu</title>
      </Helmet>

      <MenuPageHeader></MenuPageHeader>
      <TodayOffer items={offered}></TodayOffer>

      <Desserts></Desserts>
      <DessertMenu items={dessert}></DessertMenu>

      <Pizza></Pizza>
      <PizzaMenu items={pizza}></PizzaMenu>

      <Salad></Salad>
      <SaladMenu items={salad}></SaladMenu>

      <Soup></Soup>
      <SoupMenu items={soup}></SoupMenu>
    </div>
  );
};

export default MenuPageLayout;