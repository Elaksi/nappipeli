import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Button, Input, } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';

import { changeName } from '../actions/PlayerActions';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Asetukset',
  };

  constructor(props) {
    super(props);

    //Keep local UI related values in state
    this.state = { playerName: this.props.player.name, errorMessage: "" };

    this.changePlayerName = this.changePlayerName.bind(this);
  }

  //If playerName is right length, update store
  //If not, show error message
  changePlayerName() {
    newName = this.state.playerName;
    if (newName == this.props.player.name) return;
    if(newName.length > 0 && newName.length <= 20){
      this.props.changeName(newName);
      this.setState({errorMessage: ""});
      Toast.show("Nimimerkki vaihdettu!");
    }else{
      this.setState({errorMessage: "Nimimerkin on oltava 1-20 merkkiä pitkä"});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Nimimerkki</Text>
        <Input
          value={this.state.playerName}
          onChangeText={(text) => this.setState({playerName: text})}
          errorMessage={this.state.errorMessage}
          maxLength = {20}
        />
        <Button 
          title="Vaihda nimimerkkiä" 
          onPress={this.changePlayerName} 
          buttonStyle={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20
  },
  label: {
    fontSize: 20,
  }
});

const mapStateToProps = (state) => {
  const { player } = state;
  return { player };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeName,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);