import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
