// React icons
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

// CSS file
import "../Footer/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="main_footer_container">

        <div className="footer_left_container">
          <div>
            <h2>CONTACT US</h2>
            <p>Kalint Bazer, Bhola Sodor Rood, Bhola</p>
            <p>+880 17875-92274</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>

        <div className="footer_right_container">
          <div>
            <h2>Follow US</h2>
            <p>Join us on social media</p>
            <div className="footer_social_icon">
              <a target="main" href="https://www.facebook.com/profile.php?id=100077282655702"><FaFacebookF /></a>
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>

      </div>

      <div className="footer_copyright_container">
        <h1>Copyright ©{currentYear} CulinaryCloud. All rights reserved.</h1>
      </div>

    </footer>
  );
};

export default Footer;
