import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export function missingValueAlert(text) {
  return (
    <TouchableOpacity onPress={showAlert(text)} style={styles.button}>
      <Text>Alert</Text>
    </TouchableOpacity>
  )
}

showAlert = (text) => {
  Alert.alert(text);
}

const styles = StyleSheet.create({
  button: {
     textAlign: 'center',
     backgroundColor: '#4ba37b',
     width: 100,
     borderRadius: 50,
     alignItems: 'center',
     marginTop: 100
  }
});
