import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameBoard from './Components/GameBoard';
import { clickCell, resetGame } from './Actions/GameActions';

function App() {
  const dispatch = useDispatch();
  const gameState = useSelector(state => state);

  return (
    <div>
      <h1 style={{display : 'flex' , justifyContent : 'center'}}>Clickomania Game</h1>
      <GameBoard board={gameState.board} onCellClick={(row, col) => dispatch(clickCell(row, col))} />
      <div style={{display : 'flex' , justifyContent : 'center', margin: '20px'}}>
        <button style={{padding : '10px' , backgroundColor : 'green' , color : 'white'}} onClick={() => dispatch(resetGame())}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;