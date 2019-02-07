import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './navigation/AppNavigator';
import { store, persistor } from './storeConfig';

//Hide warning related to socket.io library
console.disableYellowBox = true;

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
   
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store = { store }>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator/>
            </PersistGate>
          </Provider>
        </View>
      );
    }
    
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
