import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { getDecks } from '../utils/api';
import Deck from './Deck';
import { isPlural } from '../utils/helpers';
import { purple, white, gray } from '../utils/colors';
import { removeDeck } from '../utils/api';

class DeckList extends Component {
  state = {
    decks: {}
  };
  componentDidMount() {
    getDecks()
      .then(decks => {
        this.setState({decks})
      })
      .catch(e => {
        console.log(e);
      })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.decks !== prevState.decks) {
      this.setState({ decks: this.state.decks })
    }
  }
  render() {
    const { decks } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        {decks && Object.keys(decks).map(key => (
          <TouchableOpacity key={key} onPress={() => {
            navigate('Deck', { title: decks[key].title }
          )}}>
            <View style={styles.deck}>
              <Text style={styles.text}>{decks[key].title}</Text>
              <Text style={[styles.text], {fontSize: 25, color: gray}}>
                {decks[key].questions && decks[key].questions.length} card
                {decks[key].questions && isPlural(decks[key].questions.length)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default DeckList;

const styles = StyleSheet.create({
  deck: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: white,
    borderRadius: 2,
    borderWidth: 1,
    shadowColor: gray
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  }
});
