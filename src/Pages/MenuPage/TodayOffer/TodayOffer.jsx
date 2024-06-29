/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import MenuList from "../../../Layout/Shared/MenuList/MenuList";
import { Link } from 'react-router-dom';

const TodayOffer = ({items}) => {
  return (
    <div>

      <div className="text-center">
        <div className="section_heading_one">
          <p>
            <i>---Don't miss---</i>
          </p>
        </div>

        <div className="section_heading_two">
          <span>TODAY'S OFFER</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 px-5">
        {items.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>

      <div className="mt-12 mb-24 flex items-center justify-center">
        <Link to="">
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

TodayOffer.propTypes = {
  items: PropTypes.object
}

export default TodayOffer;