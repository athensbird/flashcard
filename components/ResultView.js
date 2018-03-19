import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextButton from './TextButton';
import { styles } from './QuizView';

export default function ResultView(props) {
  const { score, key } = props.navigation.state.params;
  const { navigate, goBack } = props.navigation;
  return (
    <View>
      <Text style={styles.quizText}>Your score is: {score}</Text>
      <TextButton text='Home' onPress={() => goBack(key)}/>
    </View>
  );
}
