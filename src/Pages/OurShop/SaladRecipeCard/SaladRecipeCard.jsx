import useMenu from "../../../Hook/Hook";
import SaladCatd from "../../../components/SaladCatd/SaladCatd";

const SaladRecipeCard = () => {
  const [menu] = useMenu();
  const salads = menu.filter(item => item.category === "salad");

  return (
    <div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-y-24 my-12 mb-20">
        {
          salads.map(salad => <SaladCatd key={salad._id} salad={salad}></SaladCatd>)
        }
      </div>

    </div>
  );
};

export default SaladRecipeCard;
