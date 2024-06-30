import { useEffect, useState } from "react";
import SoupCard from "../../../components/SoupCard/SoupCard";

const SoupReceipeCart = () => {
  const [soups, setSoups] = useState([])

  useEffect (() => {
    fetch("/public/menu.json")
    .then(res => res.json())
    .then(data => {
      const soup = data.filter(item => item.category === "soup");
      setSoups(soup);
    })
  }, [])

  return (
    <div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-y-24 my-12 mb-20">
        {
          soups.map(soup => <SoupCard key={soup._id} soup={soup}></SoupCard>)
        }
      </div>

    </div>
  );
};

export default SoupReceipeCart;