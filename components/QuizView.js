import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDeck, addCardToDeck } from '../utils/api';
import TextButton from './TextButton';

export default class extends React.Component {
  render() {
    const { deck } = this.props;
    const count = deck.count;
    return (
      <TextButton text={'Correct'} onPress={() => this.nextCard}/>
      <TextButton text={'Incorrect'} onPress={() => this.nextCard}/>
    );
  }

}
