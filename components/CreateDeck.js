import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { gray } from '../utils/api';
import TextButton from './TextButton';

export default class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckTitle: ''
    }
  }
  handleSubmit() {
    saveDeckTitle(this.state.deckTitle);
  }
  render() {
    return (
      <View>
        <Text style={{paddingTop: 50}}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={deckTitle => this.setState({deckTitle})}
          value={this.state.deckTitle}
        />
        <TextButton style={styles.button} text={'Submit'} onPress={this.handleSubmit.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    alignItems: 'center',
    borderColor: gray
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
