import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { addCardToDeck } from '../utils/api';
import { gray, white, purple } from '../utils/api';

export default class CreateQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }
  handleQuestion() {
    console.log(this.state);
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={question => this.setState({question})}
          value={this.state.question}
        />
        <TextInput
          style={styles.input}
          onChangeText={answer => this.setState({answer})}
          value={this.state.answer}
        />
        <TextButton style={styles.button} text={'Submit'} onPress={this.handleQuestion.bind(this)}/>
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
  }
});
