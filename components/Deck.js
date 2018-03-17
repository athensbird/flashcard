import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDeck, addCardToDeck } from '../utils/api';
import TextButton from './TextButton';

class Deck extends React.Component {
  addCard() {
    console.log("About to add a text!");
  }
  startQuiz() {
    const { navigate } = this.props.navigation;
    console.log("About to start a quiz!");
  }
  render() {
    const { deckId } = this.props;
    const deck = getDeck(deckId);
    const addText = 'Add Card';
    const startText = 'Start Quiz';
    return (
      <View>
        <Text>{deck.title}</Text>
        <TouchableOpacity onPress={() => this.addCard}>
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
