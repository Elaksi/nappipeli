import React from 'react';
import { FlatList, Text, ScrollView, StyleSheet, View, } from 'react-native';
import WinnerItem from '../components/WinnerItem';
import { connect } from 'react-redux';

class WinnersScreen extends React.Component {
  static navigationOptions = {
    title: 'Voittajalista',
  };

  render() {
    console.log(this.props.game.winners);
    return (
      <ScrollView>
        <View style = {styles.container}>
          {this.props.game.winners.map((item) => (
            <WinnerItem win= {item} key = {item.time.toString()}/>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: '#fff',
  },
  flatList: {
    flex: 1,
  }
});


const mapStateToProps = (state) => {
  const { game } = state;
  return { game };
}

export default connect(mapStateToProps)(WinnersScreen);