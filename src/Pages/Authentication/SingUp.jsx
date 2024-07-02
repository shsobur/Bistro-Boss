import "../Authentication/AuthenticationStyle/SingInSingUp.css";
import suthImage from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";

// React icon
import { SiGoogle } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log (data);
  };

  return (
    <div className="main_authentication_container">
      <Helmet>
        <title>Bistro Boss | Sing Up</title>
      </Helmet>
      <ScrollToTop></ScrollToTop>

      <div className="inner_authentication_container">
        <div className="inner_main_form_container">
          <div className="main_form_container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_title">
                <h2>Sing Up</h2>
              </div>

              <div>
                <div className="form_inpur_container">
                  <p>Name</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type hear"
                    {...register("name", { required: true })}
                    id="111"
                  />
                  <div>
                    {errors.name && (
                      <span className="text-red-500 font-medium">
                        Name is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="form_inpur_container">
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type hear"
                    {...register("email", { required: true })}
                    id="112"
                  />
                  <div>
                    {errors.email && (
                      <span className="text-red-500 font-medium">
                        Email is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="form_inpur_container">
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    {...register(
                      "password",
                      { required: true, minLength: 6, maxLength: 20 },
                      { required: true }
                    )}
                    id="113"
                  />
                  <div>
                    {errors.password?.type === "required" && (
                      <span className="text-red-500 font-medium">
                        Password is required
                      </span>
                    )}

                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500 font-medium">
                        Password must be at least 6 characters
                      </span>
                    )}

                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-500 font-medium">
                        Password must be less than 20 characters -_-
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="form_sub_btn">
                <label htmlFor="101">
                  <input type="submit" value="Sing Up" id="101" />
                </label>
              </div>

              <div className="form_navigation_container">
                <h3>
                  Already registered? Go to{" "}
                  <span>
                    <Link to="/singin">Log in</Link>
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

export default SingUp;
