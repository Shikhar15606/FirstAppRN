import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [currentGoal, setcurrentGoal] = useState('');
  const [listofGoals, setlistofGoals] = useState([]);
  
  const currentGoalChangeHandler = (newGoal) => {
    setcurrentGoal(newGoal)
  }
  
  const addGoalToList = () => {
    setlistofGoals(listofGoals => [...listofGoals, currentGoal])
  }

  const styles = StyleSheet.create({
    root:{
      padding:20
    },

    inputContainer: {
      marginVertical:30,
      flexDirection: 'row',
      justifyContent: "space-evenly",
      alignItems: 'center'
    },

    input: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      padding: 10,
      flex:3,
      marginRight:10,
    },
    inputButton:{
      flex:1,
    },
    listItems: {
      marginVertical:10,
      backgroundColor:"#ccc",
      borderRadius:10,
      borderWidth:1,
      padding:10,
    }
  })

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        {/* alignItems for cross axis */}
        {/* justify content for main axis */}
        <TextInput placeholder="Enter your Goal" style={styles.input}
          onChangeText={currentGoalChangeHandler}
          value={currentGoal}></TextInput>
        <Button title="ADD" onPress={addGoalToList} style={styles.inputButton}></Button>
      </View>
      <ScrollView>
        {listofGoals.map((goal) => <Text style={styles.listItems} key={goal}>{goal}</Text>)}
      </ScrollView>
    </View>
  );
}

