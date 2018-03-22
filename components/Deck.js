import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDecks, addCardToDeck } from '../utils/api';
import TextButton from './TextButton';
import { missingValueAlert } from './Alert';
import { gray } from '../utils/colors';
import { isPlural } from '../utils/helpers';

class Deck extends React.Component {
  state = {
    deck: {}
  }
  startQuiz() {
    const { navigate } = this.props.navigation;
    this.state.deck.questions.length > 0
      ? navigate('Quiz', { title: this.props.navigation.state.params.title })
      : missingValueAlert('The deck is currently empty!')
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
    const { navigate } = this.props.navigation;
    const numOfQuestions = typeof this.state.deck.questions !== 'undefined'
      ? this.state.deck.questions.length : 0;
    return (
      <View>
        <Text style={styles.text}>{this.state.deck.title}</Text>
        <Text style={styles.subText}>{numOfQuestions} card{isPlural(numOfQuestions)}</Text>
        <TextButton onPress={() => {
          navigate('CreateQuestion', { title: this.state.deck.title });
        }} text='Add Card' />
        <TextButton onPress={() => this.startQuiz()} text='Start Quiz' />
      </View>
    );
  }
}

export default Deck;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 20,
    paddingBottom: 20
  },
  subText: {
    textAlign: 'center',
    fontSize: 30,
    color: gray,
    paddingTop: 20
  }
})
