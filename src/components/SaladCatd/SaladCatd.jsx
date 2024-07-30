import { useContext } from "react";
import "../SaladCatd/SaladCard.css";
import PropTypes from 'prop-types';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";

const SaladCatd = ({ salad }) => {
  const {name, image, recipe, price} = salad;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handelAddToCart = () => {
    console.log(user);
    if(user && user.email) {
      const cartItem = {
        menuId: user._id,
        email: user.email,
        image,
        name,
        price
      }

      console.log("resrt");

      axiosSecure.post("/cart", cartItem)
      .then(res => {
        console.log(res.data)

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Cart added successfully"
        });
        refetch();
      })
    }
    else{
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You have to login frist",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      })
      .then(result => {
        if(result.isConfirmed) {
          navigate("/singin", {state : {from: location}});
        }
      })
    }
  }

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

        <div onClick={handelAddToCart} className="menu_catd_button">
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
