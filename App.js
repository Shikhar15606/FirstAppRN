import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [message, setmessage] = useState('My lovely app')

  return (
    <View>
      <View style={{ padding: 50, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
        {/* alignItems for cross axis */}
        {/* justify content for main axis */}
        <TextInput placeholder="Enter your Goal" style={{ borderBottomColor: "black", borderBottomWidth: 1, padding: 10, width: '80%' }}></TextInput>
        <Button title="ADD"></Button>
      </View>
      <View>
        <Text>Display Items</Text>
      </View>
    </View>
  );
}

