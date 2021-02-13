import React, { useState } from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';

const InputGoals = ({ addGoalToList }) => {
    const [currentGoal, setcurrentGoal] = useState('');

    const currentGoalChangeHandler = (newGoal) => {
        setcurrentGoal(newGoal)
    }

    const styles = StyleSheet.create({
        inputContainer: {
            marginVertical: 30,
            flexDirection: 'row',
            justifyContent: "space-evenly",
            alignItems: 'center'
        },

        input: {
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10,
            flex: 3,
            marginRight: 10,
        },
        inputButton: {
            flex: 1,
        }
    })
    return (
        <View style={styles.inputContainer}>
            {/* alignItems for cross axis */}
            {/* justify content for main axis */}
            <TextInput placeholder="Enter your Goal" style={styles.input}
                onChangeText={currentGoalChangeHandler}
                value={currentGoal}></TextInput>
            <Button title="ADD" onPress={addGoalToList.bind(this, currentGoal)} style={styles.inputButton}></Button>
        </View>
    );
};

export default InputGoals;