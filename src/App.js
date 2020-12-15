import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();
  const titleA="Moby Dick";
  const titleB="Genesis"
  const handleClick = (name) => {
    history.push(`/about/${name}`);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => handleClick(titleA)}> {titleA} </button>
      <button onClick={() => handleClick(titleB)}> {titleB} </button>
    </div>
  );
}
