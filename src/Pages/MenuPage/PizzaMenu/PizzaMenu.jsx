import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import MenuList from "../../../Layout/Shared/MenuList/MenuList";

const PizzaMenu = ({items}) => {
  return (
    <div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 px-5 mt-24">
        {items.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>

      <div className="mt-12 mb-24 flex items-center justify-center">
        <Link to="/ourshop/pizzaCard">
          <button
            className="border-b-black
        border-b-4
        hover:bg-gray-100
        active:bg-gray-200
        rounded-xl
        px-5 py-3
        font-medium
        text-xl"
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>

    </div>
  );
};

PizzaMenu.propTypes = {
  items: PropTypes.object
}

export default PizzaMenu;
