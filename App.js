import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [message, setmessage] = useState('My lovely app')

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button title="Click Me" onPress={() => { setmessage('My first React Native App goes Here') }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
