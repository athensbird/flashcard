import React from 'react';
import { white, purple } from '../utils/colors';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TextButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPrsss}>
      <Text style={styles.submitBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
