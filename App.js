import React, { useState } from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';
import InputGoals from './Components/InputGoals';
import ListGoals from './Components/ListGoals';

export default function App() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [listofGoals, setlistofGoals] = useState([]);

  const addGoalToList = (currentGoal) => {
    setlistofGoals(listofGoals => [...listofGoals, { mykey: Math.random().toString(), value: currentGoal }])
  }

  const removeGoalfromList = (goalid) => {
    setlistofGoals(listofGoals => listofGoals.filter(goal => goal.mykey !== goalid))
  }

  const openModal = () => {
    setisModalOpen(true);
  }

  const closeModal = () => {
    setisModalOpen(false);
  }

  const styles = StyleSheet.create({
    root: {
      paddingVertical: 50,
      paddingHorizontal: 20
    },
  })

  return (
    <View style={styles.root}>
      <Button title="Add New Goals" onPress={openModal} />
      <InputGoals addGoalToList={addGoalToList} isModalOpen={isModalOpen} closeModal={closeModal} />
      <ListGoals listofGoals={listofGoals} removeGoalfromList={removeGoalfromList} />
    </View>
  );
}

