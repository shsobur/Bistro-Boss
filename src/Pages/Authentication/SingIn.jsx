import "../Authentication/AuthenticationStyle/SingInSingUp.css";
import suthImage from "../../assets/others/authentication2.png";

// React icon
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const SingIn = () => {
  return (
    <div className="main_authentication_container">
      <ScrollToTop></ScrollToTop>

      <div className="inner_authentication_container">

        <div id="singin_inner_authentication_container" className="inner_main_form_container">

          <div className="main_form_container">

            <form>
              <div className="form_title">
                <h2>Login</h2>
              </div>

              <div>
                <div className="form_inpur_container">
                  <p>Name</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type hear"
                    id=""
                  />
                </div>

                <div className="form_inpur_container">
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    id=""
                  />
                </div>
              </div>

              <div className="form_sub_btn">
                <label htmlFor="102">
                  <input type="submit" value="Sing In" id="102" />
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