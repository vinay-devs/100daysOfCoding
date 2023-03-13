import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tile from "./components/Tile";

function App() {
  const [tiles, setTile] = useState([]);
  const [number, setNumber] = useState(1);
  function addButtonHandler(number) {
    setTile([...tiles, number]);
    console.log(number);
    setNumber(number++);
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
      {tiles.map((e, i) => {
        return <Tile id={i} number={number} />;
      })}
      <button onClick={addButtonHandler} style={{ maxWidth: "min-content" }}>
        ADD
      </button>
    </div>
  );
}

export default App;
