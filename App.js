import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Deck from './components/Deck';
import DeckList from './components/DeckList';
import QuizView from './components/QuizView';
import ResultView from './components/ResultView';
import CreateDeck from './components/CreateDeck';
import CreateQuestion from './components/CreateQuestion';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { setLocalNotification } from './utils/helpers';
import { white, purple } from './utils/colors';

export default class App extends React.Component {
  componentDidMount() {
    /* create localNotification */
    setLocalNotification();
  }
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const Tabs = TabNavigator({
  List: {
    screen: DeckList
  },
  NewDeck: {
    screen: CreateDeck
  }
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        height: 3,
        weight: 0
      },
      shadowOpacity: 1
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck
  },
  CreateQuestion: {
    screen: CreateQuestion
  },
  Quiz: {
    screen: QuizView
  },
  Result: {
    screen: ResultView
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
