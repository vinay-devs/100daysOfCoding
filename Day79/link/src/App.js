import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tile from "./components/Tile";

function App() {
  const [tiles, setTile] = useState([]);
  function addButtonHandler(number) {
    setTile(number);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "50%",
      }}
    >
      <Header></Header>
      {tiles.map((tile, index) => {
        return <Tile addButtonHandler={addButtonHandler} id={index}></Tile>;
      })}
      <button onClick={addButtonHandler} style={{ maxWidth: "min-content" }}>
        ADD
      </button>
    </div>
  );
}

export default App;
