import useMenu from "../../../Hook/Hook";
import MenuList from "../../../Layout/Shared/MenuList/MenuList";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");

  return (
    <div>

      <div>
        <div className="text-center">
          <div className="section_heading_one">
            <p>
              <i>---Check it out---</i>
            </p>
          </div>

          <div className="section_heading_two">
            <span>FROM OUR MENU</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 px-5">
        {popular.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>

      <div className="mt-12 mb-24 flex items-center justify-center">
        <Link to="/menu">
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
            VIEW FULL MENU
          </button>
        </Link>
      </div>

    </div>
  );
};

export default OurMenu;
