import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import GameSelector from "./pages/GameSelector/GameSelector";
import MemoryGame from "./pages/MemoryGame/MemoryGame";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Worksheets from "./pages/Worksheets/Worksheets";
import MathWorksheetTemplate2 from "./Components/MathWorksheetTemplate2/MathWorksheetTemplate2";
import MathWorksheetTemplate1 from "./Components/MathWorksheetTemplate1/MathWorksheetTemplate1";
import MathWorksheetTemplate3 from "./Components/MathWorksheetTemplate3/MathWorksheetTemplate3";
import HandwritingWorksheet from "./pages/HandwritingWorksheet/HandwritingWorksheet";
import { useEffect, useState } from "react";
import { SERVER_ENDPOINT } from "./util";
import axios from "axios";
import Profile from "./pages/Profile/Profile";
import IdentifyBirdSound from "./pages/IdentifyBirdSound/IdentifyBirdSound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [mathWorksheet, setMathWorksheet]= useState("");
  const [startNum, setStartNum]= useState(0);
  const [endNum, setEndNum] = useState(0);
  const [operator,setOperator] = useState("");

  
  useEffect(() => {
    const getUserInfo = async (authToken: string) => {
      try {
        const response = await axios.get(SERVER_ENDPOINT + "/profile", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const user = response.data;
        setUserInfo(user);
        setIsLoading(false);
      } catch (err: any) {
        console.log(err);
        setIsLoading(false);
      }
    };
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      getUserInfo(authToken);
    }
  }, [token]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header user={userInfo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn setToken={setToken} />} />
          <Route path="profile" element={<Profile user={userInfo} setUser={setUserInfo}/> }/>
          <Route path="activities" element={<IdentifyBirdSound />}/>
          <Route path="games" element={<GameSelector />} />
          <Route path="games/memory-game" element={<MemoryGame />} />
          <Route path="worksheets" element={<Worksheets />} />
          <Route path="worksheets/handwriting" element={<HandwritingWorksheet />} />
          {/* <Route path="worksheets/template1" /> */}
          <Route path="worksheets/math/template1" element={<MathWorksheetTemplate1 />} />
          <Route path="worksheets/math/template2" element={<MathWorksheetTemplate2 />} />
          <Route path="worksheets/math/template3" element={<MathWorksheetTemplate3 />} />
        </Routes>
      </BrowserRouter>
      {/* </Body> */}
    </div>
  );
}

export default App;
