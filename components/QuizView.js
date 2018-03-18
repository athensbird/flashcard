import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDeck, addCardToDeck } from '../utils/api';
import TextButton from './TextButton';
import { red } from '../utils/colors';

export default class extends React.Component {
  render() {
    const { deck } = this.props;
    return (
      <View>
        <TextButton text='Correct' onPress={() => this.nextCard}/>
        <TextButton style={{ backgroundColor: red }} text='Incorrect' onPress={() => this.nextCard}/>
      </View>
    );
  }
}
