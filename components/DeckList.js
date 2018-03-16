import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDecks } from '../utils/api';
import Deck from './Deck';

class DeckList extends React.Component {
  componentDidMount() {
    const decks = getDecks();
  }
  render() {
    return (
      {decks && decks.map((deck) => (
        <Deck deck={deck}/>
      ))}
    );
  }
}

export default DeckList;
