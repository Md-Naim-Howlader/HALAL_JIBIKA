import "./footer.css";
import logo from "../../assets/image/logo.png";
// social icon
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>
            Unlock Your Career Potential – Your Gateway to Opportunities. HALAL
            JIBIKA - Connecting Talent with Opportunities, Building Futures
            Together.
          </p>
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://bd.linkedin.com">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a>
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="job__category item">
          <h3>Job Categories</h3>
          <ul>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Work from Home
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Internship Job
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Freelancer Job
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Part Time Job
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Full Time Job
              </a>
            </li>
          </ul>
        </div>
        <div className="job__type item">
          <h3>Job Type</h3>
          <ul>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Create Account
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Career Counselling
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> My Oficiona
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> FAQ
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Report a Problem
              </a>
            </li>
          </ul>
        </div>
        <div className="resource item">
          <h3>Resource</h3>
          <ul>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> My Account
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Support
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> How it Works
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight />
                Underwriting
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Employers
              </a>
            </li>
          </ul>
        </div>
        <div className="quick__link item">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Job Listing
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> About Us
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight />
                Contact Us
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Privacy & Policy
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineKeyboardDoubleArrowRight /> Term & Condition
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container foter__copyright">
        <p>Copyright &copy; HALAL JIBIKA 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
