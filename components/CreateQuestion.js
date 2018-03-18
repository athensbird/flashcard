import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import TextButton from './TextButton';
import { addCardToDeck } from '../utils/api';
import { gray, white, purple } from '../utils/api';

export default class CreateQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }
  handleQuestion() {
    const { title } = this.props.navigation.state.params;
    if (title !== null) {
      addCardToDeck(title, this.state);
    }
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={question => this.setState({question})}
          value={this.state.question}
          placeholder={'Enter the question'}
        />
        <TextInput
          style={styles.input}
          onChangeText={answer => this.setState({answer})}
          value={this.state.answer}
          placeholder={'Enter the answer'}
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
