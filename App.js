import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View ,TextInput } from 'react-native';

export default function App() {
  const [message, setmessage] = useState('My lovely app')

  return (
    <View>
      <View style={{padding:50}}>
        <TextInput placeholder="Enter your Goal" style={{borderBottomColor:"black", borderBottomWidth:1, padding:10}}></TextInput>
        <Button title="ADD"></Button>
      </View>
      <View>
        <Text>Display Items</Text>
      </View>
    </View>
  );
}

