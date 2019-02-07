import actionTypes from '../constants/ActionTypes';

export const pushButton = (playerName) => (
  {
    type : actionTypes.PUSH_BUTTON,
    playerName : playerName,
  }
);
export const pushSuccess = (data) => (
  {
    type : actionTypes.PUSH_SUCCESS,
    data: data,
  }
);
export const connectionSuccess = () => (
  {
    type : actionTypes.CONNECTION_SUCCESS,
  }
);
export const updateWinners = (data) => (
  {
    type : actionTypes.WINNER_LIST,
    data: data,
  }
);
export const setPushable = (pushable) => (
  {
    type : actionTypes.SET_PUSHABLE,
    pushable: pushable,
  }
);