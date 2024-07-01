import { useEffect, useState } from "react";
import PizzaCard from "../../../components/PizzaCard/PizzaCard";

const PizzaRecipeCard = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect (() => {
    fetch("http://localhost:5000/menu")
    .then(res => res.json())
    .then(data => {
      const pizza = data.filter(item => item.category === "pizza");
      setPizzas(pizza);
    })
  }, [])

  return (
    <div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-y-24 my-12 mb-20">
        {
          pizzas.map(pizza => <PizzaCard key={pizza._id} pizza={pizza}></PizzaCard>)
        }
      </div>

    </div>
  );
};

export default PizzaRecipeCard;
