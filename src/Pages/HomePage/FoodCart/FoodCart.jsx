import { useEffect, useState } from "react";
import RecipeCarts from "../../../components/RecipeCarts/RecipeCarts";

const FoodCart = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const recipeItems = data.filter((item) => item.category === "salad");
        setRecipes(recipeItems);
      });
  }, []);

  return (
    <div>

      <div>
        <div className="text-center">
          <div className="section_heading_one">
            <p>
              <i>---Should Try---</i>
            </p>
          </div>

          <div className="section_heading_two">
            <span>CHEF RECOMMENDS</span>
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-3 items-center md:grid-cols-2 sm:grid-cols-1 mx-10">
        {recipes.map((recipe) => (
          <RecipeCarts key={recipe._id} saladRecipe={recipe}></RecipeCarts>
        ))}
      </div>
    </div>
  );
};

export default FoodCart;
