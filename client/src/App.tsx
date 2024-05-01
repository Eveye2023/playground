import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import BubbleBackground from "./Components/BubbleBackground/BubbleBackground";
import GameSelector from "./pages/GameSelector/GameSelector";
import MemoryGame from "./pages/MemoryGame/MemoryGame";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Worksheets from "./pages/Worksheets/Worksheets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="back" element={<BubbleBackground />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="activities" />
          <Route path="games" element={<GameSelector />} />
          <Route path="games/memory-game" element={<MemoryGame />} />
          <Route path="worksheets" element={<Worksheets />} />
        </Routes>
      </BrowserRouter>
      {/* </Body> */}
    </div>
  );
}

export default App;
