import actionTypes from '../constants/ActionTypes';
import prizes from '../constants/Prizes';


const INITIAL_STATE = {
  pushable: false,
  pushResponse: "",
  winners: [],
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case actionTypes.PUSH_BUTTON:
      return {...state, pushable: false};
    case actionTypes.PUSH_SUCCESS:
      const pushResponse = action.data;
      //If prize was won, don't make button pushable
      const pushable = (pushResponse.prize == prizes.NONE ? true : false);
      return {...state, pushable: pushable, pushResponse : pushResponse};
    case actionTypes.CONNECTION_SUCCESS:
      return {...state, pushable: true};
    case actionTypes.SET_PUSHABLE:
      return {...state, pushable: action.pushable};
    case actionTypes.WINNER_LIST:
      return {...state, winners: action.data};
    default:
      return state;
  }
};

export default gameReducer;