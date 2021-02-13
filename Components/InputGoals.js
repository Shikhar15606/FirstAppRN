import React, { useState } from 'react';
import { Button, StyleSheet, View, TextInput, Modal } from 'react-native';

const InputGoals = ({ addGoalToList, isModalOpen, closeModal }) => {
    const [currentGoal, setcurrentGoal] = useState('');

    const currentGoalChangeHandler = (newGoal) => {
        setcurrentGoal(newGoal)
    }

    const styles = StyleSheet.create({
        inputContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: 'center'
        },
        input: {
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: "80%",
            padding: 10,
            marginVertical: 30,
        },
        btngrp: {
            width: "60%",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        btn: {
            marginHorizontal: 5,
            flex: 1,
        },
    })
    return (
        <Modal visible={isModalOpen} animationType="slide">
            <View style={styles.inputContainer}>
                {/* alignItems for cross axis */}
                {/* justify content for main axis */}
                <TextInput placeholder="Enter your Goal" style={styles.input}
                    onChangeText={currentGoalChangeHandler}
                    value={currentGoal}>
                </TextInput>
                <View style={styles.btngrp}>
                    <View style={styles.btn}>
                        <Button title="Add" onPress={() => { addGoalToList(currentGoal); closeModal(); }}></Button>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" color="red" onPress={() => { closeModal(); }}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default InputGoals;