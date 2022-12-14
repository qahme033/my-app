import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from "react-bootstrap/Button";
import NavBar from "./components/navbar"
import NavbarBrand from "./components/navbarBrand"

function App() {
  return (
    <div className="App">
      <Button >Show Toast</Button>
      {/* <NavbarBrand/> */}
      <NavBar/>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
