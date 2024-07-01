import { useEffect, useState } from "react";
import DesertCard from "../../../components/DesertCard/DesertCard";

const DesertRecipeCard = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
    .then(res => res.json())
    .then(data => {
      const dessert = data.filter(item => item.category === "dessert");
      setDesserts(dessert);
    })
  }, [])

  return (
    <div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-y-24 my-12 mb-20">
        {
          desserts.map(dessert => <DesertCard key={dessert._id} dessert={dessert}></DesertCard>)
        }
      </div>

    </div>
  );
};

export default DesertRecipeCard;