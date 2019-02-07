import React from 'react';
import { Alert, Platform, StyleSheet, View, } from 'react-native';
import { Button, Divider, Text, } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PushResponseText from '../components/PushResponseText';
import { pushButton, pushSuccess } from '../actions/GameActions';

class GameScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.buttonPushed = this.buttonPushed.bind(this);
  }

  buttonPushed(){
    this.props.pushButton(this.props.player.name);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text h1>Nappipeli</Text>
          <Text style={styles.contentText}>Tervetuloa,</Text>
          <Text style={styles.playerNameText}>{this.props.player.name}</Text>
        </View>
        <PushResponseText style={styles.contentText} response={this.props.game.pushResponse}/>
        <View style={styles.buttonView}>
          <Button title="Paina"
            disabled={!this.props.game.pushable}
            onPress={this.buttonPushed} 
            titleStyle={styles.contentText}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { game, player } = state;
  return { game, player };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    pushButton,
    pushSuccess
  }, dispatch)
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonView: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 30,
      marginRight: 30,
      marginLeft: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  playerNameText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 25,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);