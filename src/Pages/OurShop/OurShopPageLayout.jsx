import { Helmet } from "react-helmet-async";
import OurShopPageBaner from "./OurShopPageBaner/OurShopPageBaner";
import FoodOrder from "./FoodOrder/FoodOrder";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const OurShopPageLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>

      <Helmet>
        <title>Bostro Boss Restaurant | Our Shop</title>
      </Helmet>

      <OurShopPageBaner></OurShopPageBaner>
      <FoodOrder></FoodOrder>
      <Outlet></Outlet>
    </div>
  );
};

export default OurShopPageLayout;