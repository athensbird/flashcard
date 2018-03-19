import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDecks, addCardToDeck } from '../utils/api';
import TextButton from './TextButton';

class Deck extends React.Component {
  state = {
    deck: {}
  }
  startQuiz() {
    const { navigate } = this.props.navigation;
    navigate('Quiz', { title: this.props.navigation.state.params.title });
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
    return (
      <View>
        <Text style={styles.text}>{this.state.deck.title}</Text>
        <TouchableOpacity onPress={() => {
          navigate('CreateQuestion', { title: this.state.deck.title });
        }}>
          <Text style={styles.text}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.startQuiz()}>
          <Text style={styles.text}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20
  }
})
