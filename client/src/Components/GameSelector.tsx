import { Outlet, Link } from "react-router-dom";

function GameSelector() {
  return (
    <>
      <nav>
        <ul className="game-selector">
          <li className="game-item game-activities">
            <Link to="/games/memory-game">Memory Game</Link>
          </li>
          <li className="game-item game-games">
            <Link to="/games/flappy-bord">Flappy Bird</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default GameSelector;
