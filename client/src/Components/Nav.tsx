import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav-item nav-activities">
            <Link to="/activities">ACTIVITIES</Link>
          </li>
          <li className="nav-item nav-games">
            <Link to="/games">GAMES</Link>
          </li>
          <li className="nav-item nav-worksheets">
            <Link to="/worksheets">WORKSHEETS</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
