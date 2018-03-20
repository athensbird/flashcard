import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import TextButton from './TextButton';
import { missingValueAlert } from './Alert';
import { addCardToDeck } from '../utils/api';
import { gray, white, purple } from '../utils/api';

export default class CreateQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }
  handleQuestion() {
    const { title } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    if (title !== null && this.state.question !== '' && this.state.answer !== '') {
      addCardToDeck(title, this.state)
        .then(() => {
          navigate('Deck', { title: title });
        })
    } else {
      missingValueAlert('Please make sure to complete the card!');
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
          multiline={true}
          onChangeText={answer => this.setState({answer})}
          value={this.state.answer}
          placeholder={'Enter the answer'}
        />
        <TextButton style={[styles.button], {marginTop: 100}} text={'Submit'} onPress={this.handleQuestion.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    borderColor: gray,
    marginTop: 30
  }
});
