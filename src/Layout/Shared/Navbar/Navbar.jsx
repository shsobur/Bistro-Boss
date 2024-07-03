// React icons
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

// CSS file
import "../Navbar/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelSingOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You went to Logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, LogOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "LogOut",
            text: "LogOut successfully",
            icon: "success",
          });
        });
      }
    });
  };

  const navOpsion = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-extrabold"
              : "text-[#ffffff] font-extrabold"
          }
        >
          <a>HOME</a>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-extrabold"
              : "text-[#ffffff] font-extrabold"
          }
        >
          <a>CONTACT US</a>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-extrabold"
              : "text-[#ffffff] font-extrabold"
          }
        >
          <a>DASHBOARD</a>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-extrabold"
              : "text-[#ffffff] font-extrabold"
          }
        >
          <a>OUR MENU</a>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/ourshop"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-extrabold"
              : "text-[#ffffff] font-extrabold"
          }
        >
          <a>OUR SHOP</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <header>
      <nav>
        <div>
          <div className="navbar max-w-screen-xl fixed z-10 bg-[#151515] bg-opacity-30">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="bg-[#ffffff] btn btn-ghost lg:hidden"
                >
                  <GiHamburgerMenu />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {navOpsion}
                </ul>
              </div>

              <Link to="/">
                <div className="web_name">
                  <h2>BISTRO BOSS</h2>
                  <h3>Restaurant</h3>
                </div>
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navOpsion}</ul>
            </div>

            <div className="navbar-end">
              <div>
                {user ? (
                  <div className="font-extrabold text-[#ffffff]">
                    <button onClick={handelSingOut}>SING OUT</button>
                  </div>
                ) : (
                  <div className="font-extrabold text-[#ffffff]">
                    <Link to="/singin">SING IN</Link>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center justify-center pl-10">
                <div className="text-5xl text-[#ffffff] ml-5">
                  <IoMdContact />
                </div>
                <div>
                  {
                    user ? <span className="text-[#ffffff]">{user?.email}</span> : <span></span>
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
