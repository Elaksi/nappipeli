import actionTypes from '../constants/ActionTypes';

const INITIAL_STATE = {
  name: `Pelaaja${Math.floor((Math.random() + 1) * 1000)}`
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case actionTypes.CHANGE_NAME:
      const name = action.newName;
      const newState = { name };
      return newState;
    default:
      return state;
  }
};

export default playerReducer;