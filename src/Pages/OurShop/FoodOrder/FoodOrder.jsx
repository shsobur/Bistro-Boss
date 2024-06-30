import { useState } from "react";
import { Link } from "react-router-dom";

const FoodOrder = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div  className="mt-40">

      <div className="flex gap-5 items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">

        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-2 ${tabIndex === 0 ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600" : "font-semibold text-xl text-[#151515]"}`}
        >
          SALAD
        </Link>

        <Link
          to="pizzaCard"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-2 ${tabIndex === 1 ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600" : "font-semibold text-xl text-[#151515]"}`}
        >
          PIZZA
        </Link>

        <Link
          to="soupCard"
          onClick={() => setTabIndex(2)}
          className={`flex items-center flex-shrink-0 px-5 py-2 ${tabIndex === 2 ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600" : "font-semibold text-xl text-[#151515]"}`}
        >
          SOUPS
        </Link>

        <Link
          to="desertCard"
          onClick={() => setTabIndex(3)}
          className={`flex items-center flex-shrink-0 px-5 py-2 ${tabIndex === 3 ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600" : "font-semibold text-xl text-[#151515]"}`}
        >
          DESSERT
        </Link>

        <Link
          to="drinkCard"
          onClick={() => setTabIndex(4)}
          className={`flex items-center flex-shrink-0 px-5 py-2 ${tabIndex === 4 ? "font-semibold text-xl text-[#bb8506] border-b-4 border-yellow-600" : "font-semibold text-xl text-[#151515]"}`}
        >
          DRINKS
        </Link>

      </div>

    </div>
  );
};

export default FoodOrder;
