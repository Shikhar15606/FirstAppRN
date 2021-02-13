import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [currentGoal, setcurrentGoal] = useState('');
  const [listofGoals, setlistofGoals] = useState([]);
  
  const currentGoalChangeHandler = (newGoal) => {
    setcurrentGoal(newGoal)
  }
  
  const addGoalToList = () => {
    setlistofGoals(listofGoals => [...listofGoals, {mykey: Math.random().toString() ,value:currentGoal}])
  }

  const styles = StyleSheet.create({
    root:{
      paddingVertical:50,
      paddingHorizontal:20
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
      <FlatList
        keyExtractor={(item,index) => {return item.mykey}}
        data={listofGoals}
        renderItem={itemData => (
          <Text style={styles.listItems}>{itemData.item.value}</Text>
        )} 
      />
    </View>
  );
}

