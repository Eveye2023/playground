import banner from "../../assets/images/banner.png";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <div className="home-menu">
          <div className="home-menu__item">
            <Link to="games" className="link">
              <a className="home-menu__link home-menu__games">Games</a>
            </Link>
          </div>
          <div className="home-menu__item">
            <Link to="worksheets" className="link">
              <a className="home-menu__link home-menu__worksheets">Worksheets</a>
            </Link>
          </div>
          <div className="home-menu__item">
            <Link to="activities" className="link">
              <a className="home-menu__link home-menu__activities">Activities</a>
            </Link>
          </div>
        </div>
        <div className="hero">
          <img className="hero__img" src={banner} alt="banner" />
        </div>
      </main>
    </>
  );
}

export default Home;
