import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Containers/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <p>
          Here goes body
        </p>
        </Body>
    </div>
  );
}

export default App;
