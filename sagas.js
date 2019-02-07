import { Alert } from 'react-native';
import { takeEvery, put, call } from 'redux-saga/effects'

import actionTypes from './constants/ActionTypes';

export default handleSuccessfulPush = function* handleSuccessfulPush(params){
  yield takeEvery(actionTypes.PUSH_SUCCESS, function*(action){
    console.log("handleSuccessfulPush");
    const pushResponse = action.data;
    const prize = pushResponse.prize;
    if(prize != prizes.NONE){
      prizeText = prizes.properties[prize].congratulation;
      try {
        const thanked = yield call(showPrizeAlert, prizeText);
        yield put({type: actionTypes.SET_PUSHABLE, pushable: true })
      }catch(e){
        console.log(e.message)
      }
    }
  });
  yield takeEvery(actionTypes.PUSH_BUTTON, (action) => {
    console.log("isconnected", params.socket.connected);
    params.socket.emit(actionTypes.PUSH_BUTTON, {playerName: action.playerName});
  });
};

function showPrizeAlert(prizeText) {
  
  console.log("sisäl");
  return new Promise((resolve, reject) => {
    Alert.alert('Onneksi olkoon!', prizeText, [
      { text: 'Kiitos!', onPress: () => {
        console.log("tääl ikka");
        resolve('thanked');
        }
      }],
      { cancelable: false }
    );
  });
  
  
}