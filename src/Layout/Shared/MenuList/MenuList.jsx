import "../MenuList/MenuList.css";
import PropTypes from 'prop-types';

const MenuList = ({item}) => {
  const {name, image, price, recipe} = item;

  return (
    <div className="menuList_main_container">

      <div className="menuList_image_container">
        <img src={image} alt="recipe image" />
      </div>

      <div className="menuList_text_container">
        <div>
          <h2>{name} <span>--------------------</span></h2>
          <p>{recipe}</p>
        </div>
        <div className="menuList_price_container"><span>${price}</span></div>
      </div>

    </div>
  );
};

MenuList.propTypes = {
  item: PropTypes.object,
}

export default MenuList;