import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextButton from './TextButton';
import { styles } from './QuizView';

export default function ResultView(props) {
  const { score } = props.navigation.state.params;
  const { navigate } = props.navigation;
  return (
    <View>
      <Text style={styles.quizText}>Your score is: {score}</Text>
      <TextButton text='Home' onPress={() => navigate('Home')}/>
    </View>
  );
}
