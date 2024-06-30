import { useEffect, useState } from "react";
import DrinkCard from "../../../components/DrinkCard/DrinkCard";

const DrinkRecipeCard = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const drink = data.filter((item) => item.category === "drinks");
        setDrinks(drink);
      });
  }, []);

  return (
    <div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-y-24 my-12 mb-20">
        {drinks.map((drink) => (
          <DrinkCard key={drink._id} drink={drink}></DrinkCard>
        ))}
      </div>

    </div>
  );
};

export default DrinkRecipeCard;
