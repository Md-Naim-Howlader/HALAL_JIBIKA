import { useRef, useState } from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { BiLogIn } from "react-icons/bi";
import logoImg from "../../assets/image/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef();

  const handleToggle = () => {
    setToggle(!toggle);

    // toggling
    toggle
      ? toggleRef.current.classList.remove("show")
      : toggleRef.current.classList.add("show");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <div className="logo">
            <img src={logoImg} alt="logo" />
            <div className="navToggle">
              <button onClick={handleToggle}>
                {toggle ? <VscChromeClose /> : <FaBars />}
              </button>
            </div>
          </div>

          <nav className="navBar" ref={toggleRef}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/favorite">Favorite</NavLink>
              </li>
              <li>
                <a href="">Post a Job</a>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

              <li>
                <button>Sign Up</button>
              </li>
              <li>
                <button>
                  <BiLogIn /> Sign In
                </button>
              </li>
              <li>
                <button className="userBtn">
                  <FaUserCircle /> <span>Md. Naim</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
