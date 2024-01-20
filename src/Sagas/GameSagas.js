import { takeLatest, put } from 'redux-saga/effects';
import { CLICK_CELL, RESET_GAME, UPDATE_GAME_STATE } from '../Constants/ActionTypes';


function* watchClickCell() {
  yield takeLatest(CLICK_CELL, handleCellClick);
}

function* handleCellClick(action) {

  const newState = {}; // updated state
  yield put({ type: UPDATE_GAME_STATE, payload: newState });
}

function* watchResetGame() {
  yield takeLatest(RESET_GAME, handleResetGame);
}

function* handleResetGame() {
  const initialState = {}; 
  yield put({ type: UPDATE_GAME_STATE, payload: initialState });
}

export default function* gameSaga() {
  yield watchClickCell();
  yield watchResetGame();
}