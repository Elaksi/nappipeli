import io from 'socket.io-client';
import Toast from 'react-native-simple-toast';

import server from '../constants/Server';
import actionTypes from '../constants/ActionTypes';
import { connectionSuccess, pushSuccess, updateWinners, setPushable } from '../actions/GameActions';

//Connect to server and listen to actions
const setupSocket = (dispatch) => {
  const socket = io.connect(server.url);

  socket.on('connect', () => {
    Toast.show("Yhdistetty");
    dispatch(connectionSuccess());
  });

  //If server sends new winner array, update store
  socket.on(actionTypes.WINNER_LIST, (data) => {
    dispatch(updateWinners(data));
  });

  //Handle servers push response
  socket.on(actionTypes.PUSH_SUCCESS, (data) => {
    dispatch(pushSuccess(data));
  });

  socket.on('disconnect', () => {
    Toast.show("Ei yhteyttä palvelimeen");
    dispatch(setPushable(false));
  });

  socket.on('connect_error', (error) => {
    Toast.show("Ei yhteyttä palvelimeen");
  });

  return socket;
}

export default setupSocket;