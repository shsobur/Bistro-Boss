import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noNavAndFooterInSingIn = location.pathname.includes("singin");
  const noNavAndFooterInSingUp = location.pathname.includes("singup");

  return (
    <div>
      {noNavAndFooterInSingIn || noNavAndFooterInSingUp || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavAndFooterInSingIn || noNavAndFooterInSingUp || <Footer></Footer>}
    </div>
  );
};

export default Main;