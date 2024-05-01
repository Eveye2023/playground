import { Outlet, Link } from "react-router-dom";
import Park from "../../Components/Park/Park";
import ribbon_banner from "../../assets/images/choose-game.png";
import "./GameSelector.scss";

function GameSelector() {
  return (
    <>
      <nav className="game-selector">
        <div className="game-selector__header">
          <img src={ribbon_banner} alt="ribbon banner" />
        </div>
        <ul className="game-selector__list">
          <li className="game-selector__item game-selector__memory-game">
            <Link className="game-selector__link" to="/games/memory-game">Memory Game</Link>
          </li>
          <li className="game-selector__item game-selector__mole-game">
            <Link className="game-selector__link" to="/games/flappy-bord">What a Mole</Link>
          </li>
          <li className="game-selector__item game-selector__bird-game">
            <Link className="game-selector__link" to="/games/flappy-bord">Flappy Bird</Link>
          </li>
        </ul>
      </nav>
      <div className="game-svg">
        <Park />
      </div>
    </>
  );
}

export default GameSelector;
