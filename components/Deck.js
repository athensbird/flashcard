import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDeck, addCardToDeck } from '../utils/api';
import TextButton from './TextButton';

class DeckList extends React.Component {
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
        <Text>{deck.count} cards</Text>
        <TextButton text={addText} onPress={() => this.addCard}/>
        <TextButton text={startText} onPress={() => this.startQuiz}/>
      </View>
    );
  }
}

export default DeckList;
