import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import prizes from '../constants/Prizes';

export default class PushResponseText extends React.Component {

  render() {
    const response = this.props.response;
    if (response == "" || response == null) {
      return (
        <View style={styles.container}>
          <Text style = {this.props.style}>Paina nappulaa pelataksesi!</Text>
        </View>
        );
    } else {
      const prizeName = prizes.properties[this.props.response.prize].name;
      const textStyle = this.props.style;
      return (
        <View style={styles.container}>
          <Text style = {textStyle}>{this.props.response.prize == prizes.NONE ? `Ei voittoa` : `Voitto: ${prizeName}`}</Text>
          <Text style = {textStyle}>Seuraavaan voittoon</Text>
          <Text style = {textStyle}><Text style = {styles.boldText}>{response.remaining}</Text></Text>
          <Text style = {textStyle}>painallusta</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});