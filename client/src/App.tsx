import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Containers/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import GamesContainer from "./Containers/GamesContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="activities" />
            <Route path="games" element={<GamesContainer />} />
            <Route path="games/:gameId" element={<GamesContainer />} />
            <Route path="worksheets" />
          </Routes>
        </BrowserRouter>
      </Body>
    </div>
  );
}

export default App;
