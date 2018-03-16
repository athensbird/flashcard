import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDecks } from '../utils/api';
import Deck from './Deck';

class DeckList extends React.Component {
  componentDidMount() {
    const decks = getDecks();
  }
  render() {
    return (
      {decks && decks.map((deck) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'Deck',
          { deckId: deck.deckId }
        )}/>
          <Text>{deck.title}</Text>
          <Text>{deck.count} cards</Text>
        </TouchableOpacity>
      ))}
    );
  }
}

export default DeckList;
