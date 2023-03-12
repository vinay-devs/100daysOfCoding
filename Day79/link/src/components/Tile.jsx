import React, { useState } from "react";
import styled from "styled-components";

export default function Tile(props) {
  const [number, setNumber] = useState(1);
  return (
    <TileStyle>
      <p>{number}</p>
    </TileStyle>
  );
}

const TileStyle = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid black;
  width: 100px;
  heigth: 100px;
`;
