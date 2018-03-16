import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDecks } from '../utils/api';
import Deck from './Deck';
import { purple } from '../utils/colors';

class DeckList extends Component {
  state = {
    decks: []
  };
  componentDidMount() {
    getDecks()
      .then(decks => {
        this.setState({decks: decks})
      })
      .catch(e => {
        console.log(e);
      })
  }
  render() {
    const { decks } = this.state;
    return (
      <View>
        {decks && Object.keys(decks).map(key => (
          <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate(
            'Deck',
            { title: decks[key].title }
          )}>
            <Text style={styles.text}>{decks[key].title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default DeckList;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: purple
  }
});
