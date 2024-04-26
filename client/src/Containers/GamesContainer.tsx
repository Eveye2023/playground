import GameSelector from "../Components/GameSelector";
import GamePanel from "./GamePanel";
import { useParams } from "react-router-dom";

interface HeaderProps {}
function GamesContainer(props: HeaderProps) {
  const { gameId } = useParams();
  return (
    <div className="games-container">
      <GameSelector />
      {gameId ? (
        <GamePanel>
          <h1>Welcome</h1>
          <h2>You are playing {gameId}</h2>
        </GamePanel>
      ) : (
        <div>
          <h1>Choose a game to start playing!</h1>
        </div>
      )}
    </div>
  );
}

export default GamesContainer;
