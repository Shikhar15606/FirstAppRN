import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  
  const styles = StyleSheet.create({
    inputContainer: {
      padding: 50,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center'
    },

    input: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      padding: 10,
      width: '80%'
    }
  })
  
  return (
    <View>
      <View style={styles.inputContainer}>
        {/* alignItems for cross axis */}
        {/* justify content for main axis */}
        <TextInput placeholder="Enter your Goal" style={styles.input}></TextInput>
        <Button title="ADD"></Button>
      </View>
      <View>
        <Text>Display Items</Text>
      </View>
    </View>
  );
}

