import "../SaladCatd/SaladCard.css";
import PropTypes from 'prop-types';

const SaladCatd = ({ salad }) => {
  const {name, image, recipe, price} = salad;

  return (
    <div className="max-w-sm shadow-md bg-gray-50 text-gray-800">

      <div className="relative">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full h-72 bg-gray-500"
        />
        <div className="card_price_container">
          <h2>$ {price}</h2>
        </div>
      </div>

      <div className="flex flex-col justify-between p-6 space-y-8">

        <div className="space-y-2">
          <h2 className="text-xl text-center font-bold tracking-wide">
            {name}
          </h2>
          <p className="text-[#737373] text-sm">
            {recipe}
          </p>
        </div>

        <div className="menu_catd_button">
          <button>ADD TO CART</button>
        </div>

      </div>

    </div>
  );
};

SaladCatd.propTypes = {
  salad: PropTypes.object
}

export default SaladCatd;
