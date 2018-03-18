import React from 'react';
import { white, purple, lightPurp } from '../utils/colors';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TextButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.submitBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: lightPurp,
    color: white,
    paddingTop: 10,
    height: 45,
    borderRadius: 2,
    alignItems: 'stretch',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
    fontSize: 20
  }
});
