import React, { useState } from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';
import InputGoals from './Components/InputGoals';
import ListGoals from './Components/ListGoals';

export default function App() {

  const [listofGoals, setlistofGoals] = useState([]);

  const addGoalToList = (currentGoal) => {
    setlistofGoals(listofGoals => [...listofGoals, { mykey: Math.random().toString(), value: currentGoal }])
  }

  const styles = StyleSheet.create({
    root: {
      paddingVertical: 50,
      paddingHorizontal: 20
    },
  })

  return (
    <View style={styles.root}>
      <InputGoals addGoalToList={addGoalToList} />
      <ListGoals listofGoals={listofGoals} />
    </View>
  );
}

