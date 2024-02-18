import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hd() {
  return <h1>hello ko</h1>;
}

const Hello = () => (
  <div>
    <h1>hello kese ho app sa</h1>
    <p>checking in jsx file</p>
  </div>
);
ReactDOM.render(<Hello />, document.querySelector("#root"));
