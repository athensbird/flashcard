import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDecks, addCardToDeck } from '../utils/api';
import TextButton from './TextButton';

class Deck extends React.Component {
  state = {
    deck: {}
  }
  addCard() {
    console.log("About to add a text!");
  }
  startQuiz() {
    const { navigate } = this.props.navigation;
    console.log("About to start a quiz!");
  }

  componentDidMount() {

    /*
    getDecks()
      .then(decks => decks.filter(
        d => d.title === title
      )).then(deck => {
        this.setState({deck})
      });
    */
  }

  render() {
    const { title } = this.props.navigation.state.params;
    console.log(title);
    const addText = 'Add Card';
    const startText = 'Start Quiz';
    return (
      <View>
        <Text>{title}</Text>
        <TouchableOpacity onPress={() => this.addCard()}>
          <Text>{addText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.startQuiz}>
          <Text>{startText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;
