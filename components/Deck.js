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
    getDecks()
      .then(decks => Object.values(decks).filter(
        d => d.title === this.props.navigation.state.params.title
      )).then(deckArray => {
        this.setState({
          deck: deckArray[0]
        })
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <Text>{this.state.deck.title}</Text>
        <TouchableOpacity onPress={() => this.addCard()}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.startQuiz}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;
