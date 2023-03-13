import React, { useState } from "react";
import styled from "styled-components";

export default function Tile(props) {
  return (
    <TileStyle id={props.id}>
      <p>{props.number}</p>
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
