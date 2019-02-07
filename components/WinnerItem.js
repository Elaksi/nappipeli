import React from 'react';
import { Text, View,  } from 'react-native';
import prizes from '../constants/Prizes';
import moment from 'moment';
import { ListItem } from 'react-native-elements';

export default class WinnerItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const win = this.props.win;
    const dateString = moment(win.time).format('DD.MM.YYYY HH:mm:ss');
    return (
      <ListItem
        title = {prizes.properties[win.prize].name}
        subtitle = {win.playerName}
        rightTitle = {dateString}/>
    );
  }
}