import { CLICK_CELL, RESET_GAME, UPDATE_GAME_STATE } from '../Constants/ActionTypes';

const initializeGrid = () => {
  const colors = ['red', 'blue', 'green']; 
  const grid = [];

  for (let row = 0; row < 10; row++) {
    const rowArray = [];
    for (let col = 0; col < 10; col++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      rowArray.push(randomColor);
    }
    grid.push(rowArray);
  }

  return grid;
};

const burstConnectedCells = (board, startRow, startCol, targetColor) => {
  const visited = new Set();
  const queue = [{ row: startRow, col: startCol }];

  while (queue.length > 0) {
    const { row, col } = queue.shift();

    if (
      row >= 0 &&
      row < board.length &&
      col >= 0 &&
      col < board[row].length &&
      board[row][col] === targetColor &&
      !visited.has(`${row}-${col}`)
    ) {
      visited.add(`${row}-${col}`);
      queue.push(
        { row: row + 1, col },
        { row: row - 1, col },
        { row, col: col + 1 },
        { row, col: col - 1 }
      );
    }
  }

  if (visited.size >= 3) {
    visited.forEach(cell => {
      const [row, col] = cell.split('-').map(Number);
      board[row][col] = getRandomColor();
    });
    return visited.size; 
  }
  return 0; 
};

const getRandomColor = () => {
  const colors = ['red', 'blue', 'green']; 
  return colors[Math.floor(Math.random() * colors.length)];
};

const initialState = {
  gamesPlayed: 0,
  gamesWon: 0,
  gamesLost: 0,
  score: 0,
  board: initializeGrid(),
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CELL:
      const { row, col } = action.payload;
      const clickedColor = state.board[row][col];
      
      const newBoard = state.board.map(row => [...row]);

      const cellsBurst = burstConnectedCells(newBoard, row, col, clickedColor);

      return {
        ...state,
        board: newBoard,
        score: state.score + cellsBurst,
        gamesPlayed: state.gamesPlayed + 1,
        gamesWon: cellsBurst > 0 ? state.gamesWon + 1 : state.gamesWon,
        gamesLost: cellsBurst === 0 ? state.gamesLost + 1 : state.gamesLost,
      };

    case RESET_GAME:
      return { ...initialState, board: initializeGrid() };

    case UPDATE_GAME_STATE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default gameReducer;
