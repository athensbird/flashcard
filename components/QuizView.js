import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDecks } from '../utils/api';
import TextButton from './TextButton';
import { red, green } from '../utils/colors';

export default class extends React.Component {
  state = {
    deck: {},
    cards: [],
    currentIndex: 0,
    answerHidden: true,
    score: 0
  };
  revealAnswer() {
    this.setState({
      answerHidden: false
    });
  }
  incrementScore() {
    this.setState({
      score: this.state.score + 1
    }, () => {this.nextCard()});
  }
  nextCard() {
    const { navigate } = this.props.navigation;
    const { currentIndex, cards } = this.state;
    console.log(this.state.score);
    if (currentIndex === cards.length - 1) {
      navigate('Result', { score: this.state.score });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        answerHidden: true
      });
    }
  }
  componentDidMount() {
    getDecks()
      .then(decks => Object.values(decks).filter(
        d => d.title === this.props.navigation.state.params.title
      )).then(deckArray => {
        this.setState({
          deck: deckArray[0],
          cards: deckArray[0]['questions']
        });
      }).catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { deck } = this.props;
    const { cards, currentIndex, answerHidden } = this.state;
    const numOfQuestions = typeof this.state.deck.questions !== 'undefined'
      ? this.state.deck.questions.length : 0;
    return (
      <View>
        <Text style={{fontSize: 25, paddingTop: 10}}>{currentIndex+1}/{numOfQuestions} cards</Text>
        {answerHidden
          ? <View>
              <Text style={styles.quizText}>{cards.length > 0 && cards[currentIndex].question}</Text>
              <TextButton text='Answer' onPress={(numOfQuestions) => this.revealAnswer()} />
            </View>
          : <View>
              <Text style={styles.quizText}>{cards.length > 0 && cards[currentIndex].answer}</Text>
              <TextButton style={{ backgroundColor: green }} text='Correct' onPress={() => this.incrementScore()}/>
              <TextButton style={{ backgroundColor: red }} text='Incorrect' onPress={() => this.nextCard()}/>
            </View>
        }
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  quizText: {
    fontSize: 40,
    paddingTop: 30,
    textAlign: 'center'
  }
});
