import Baner from "./Baner/Baner";
import Bistro from "./Bistro/Bistro";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import FoodCart from "./FoodCart/FoodCart";
import OurMenu from "./OurMenu/OurMenu";
import Review from "./Review/Review";

const HomePageLayout = () => {
  return (
    <div>
      <Baner></Baner>
      <Category></Category>
      <Bistro></Bistro>
      <OurMenu></OurMenu>
      <CallUs></CallUs>
      <FoodCart></FoodCart>
      <Featured></Featured>
      <Review></Review>
    </div>
  );
};

export default HomePageLayout;
