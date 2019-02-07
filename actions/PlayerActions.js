import actionTypes from '../constants/ActionTypes';

export const changeName = newName => (
  {
    type : actionTypes.CHANGE_NAME,
    newName: newName,
  }
);