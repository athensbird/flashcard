import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { missingValueAlert } from './Alert';
import { saveDeckTitle } from '../utils/api';
import { black, gray } from '../utils/api';
import TextButton from './TextButton';

export default class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckTitle: ''
    }
  }
  /*
  showAlert = () => {
    Alert.alert('You have to set the name of the deck!');
  }
  missingValueAlert = () => {
    return (
      <TouchableOpacity onPress={this.showAlert()} style={styles.button}>
        <Text>Alert</Text>
      </TouchableOpacity>
    )
  }
  */
  handleSubmit() {
    const { navigate } = this.props.navigation;
    if (this.state.deckTitle === '') {
      missingValueAlert('Deck Title Missing!');
    } else {
      saveDeckTitle(this.state.deckTitle);
      navigate('Home');
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.questionText}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={deckTitle => this.setState({deckTitle})}
          value={this.state.deckTitle}
        />
        <TextButton text={'Submit'} onPress={this.handleSubmit.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionText: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 50
  },
  input: {
    height: 40,
    width: 300,
    marginTop: 100,
    marginBottom: 30,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25
  }
});
