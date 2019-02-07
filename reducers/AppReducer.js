import { combineReducers } from 'redux';
import gameReducer from './GameReducer';
import playerReducer from './PlayerReducer';

export default combineReducers({ game: gameReducer, player: playerReducer });