import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GameScreen from '../screens/GameScreen';
import WinnersScreen from '../screens/WinnersScreen';
import SettingsScreen from '../screens/SettingsScreen';

const GameStack = createStackNavigator({
  Game: {
    screen: GameScreen,
  }
});

GameStack.navigationOptions = {
  tabBarLabel: 'Pelaa',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-play` : 'md-play'
      }
    />
  ),
};

const WinnersStack = createStackNavigator({
  Winners: {
    screen: WinnersScreen,
  }
});

WinnersStack.navigationOptions = {
  tabBarLabel: 'Voittajat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
};


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Asetukset',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  ),
};

export default createAppContainer(createBottomTabNavigator({
  GameStack,
  WinnersStack,
  SettingsStack,
}));
