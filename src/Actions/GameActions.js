import { CLICK_CELL, RESET_GAME, UPDATE_GAME_STATE } from '../Constants/ActionTypes';

export const clickCell = (row, col) => ({
  type: CLICK_CELL,
  payload: { row, col },
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const updateGameState = (state) => ({
  type: UPDATE_GAME_STATE,
  payload: state,
});