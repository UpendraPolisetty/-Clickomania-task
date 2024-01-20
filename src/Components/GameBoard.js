import React from 'react';
import Cell from './Cell';
import ScoreBoard from './ScoreBoard';

const GameBoard = ({ board, onCellClick }) => (
  <div style={{display : 'flex' , justifyContent : 'center'}}>
     <div style={{margin : '20px' , padding : '20px', width : '300px' , backgroundColor : 'rgb(209, 231, 251)'}}>
        <ScoreBoard/>
     </div>
     <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 40px)" }}>
    {board.map((row, rowIndex) => (
      row.map((color, colIndex) => (
        <Cell
          key={`${rowIndex}-${colIndex}`}
          color={color}
          onClick={() => onCellClick(rowIndex, colIndex)}
        />
      ))
    ))}
  </div>
  </div>
);

export default GameBoard;