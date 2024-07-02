import "../Authentication/AuthenticationStyle/SingInSingUp.css";
import suthImage from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

// React icon
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const SingIn = () => {
  const { singInUser } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect (() => {
    loadCaptchaEnginge(6); 
  }, [])

  const handleValidateCaptch = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log (user_captcha_value);

    if (validateCaptcha(user_captcha_value, false) === true) {
      setDisabled(false);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Captcha match successfully"
      });
    }else{
      setDisabled(true);
    }
  }

  const handleSingIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    singInUser(email, password)
    .then(result => {
      const singInUser = result.user;
      console.log (singInUser);

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
        title: "Signed up successfully"
      });
      form.reset();
      navigate("/");
    })
    .catch(error => {
      setDisabled(true);
      console.error(error.message);
    })
  }

  return (
    <div className="main_authentication_container">
      <Helmet>
        <title>Bistro Boss | Sing Up</title>
      </Helmet>
      <ScrollToTop></ScrollToTop>

      <div className="inner_authentication_container">

        <div id="singin_inner_authentication_container" className="inner_main_form_container">

          <div className="main_form_container">

            <form onSubmit={handleSingIn}>
              <div className="form_title">
                <h2>Login</h2>
              </div>

              <div>

                <div className="form_inpur_container">
                  <p>Email</p>
                  <input
                    type="text"
                    name="email"
                    placeholder="Type hear"
                    id="105"
                  />
                </div>

                <div className="form_inpur_container">
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    id="106"
                  />
                </div>

                <div>
                <LoadCanvasTemplate />
                </div>

                <div className="form_inpur_container">
                  <input
                    onChange={handleValidateCaptch}
                    ref={captchaRef}
                    type="text"
                    name="captcha"
                    placeholder="Type captcha hear"
                    id="107"
                  />
                </div>

              </div>

              <div className={disabled ? "form_sub_disabled_btn" : "form_sub_btn"}>
                <label htmlFor="102">
                  <input disabled={disabled} type="submit" value="Sing In" id="102" />
                </label>
              </div>

              <div className="form_navigation_container">
                <h3>
                New here?{" "}
                  <span>
                    <Link to="/singup">Create a New Account</Link>
                  </span>
                </h3>
                <h4>Or sign up with</h4>

                <div className="form_icon_container">
                  <SiGoogle />
                  <FiGithub />
                  <GrFacebookOption />
                </div>

              </div>

            </form>

          </div>

          <div className="authentication_image_container">
            <img src={suthImage} alt="image" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default SingIn;