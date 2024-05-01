import logo from "../../assets/images/logo7.png";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="header__nav">
        <Link to="signin">
          <div>
            <i className="fa fa-solid fa-user"></i> Login
          </div>
        </Link>
        <div>
          <i className="fa fa-solid fa-bars"></i> Menu
        </div>
      </div>
    </div>
  );
}

export default Header;
