import React from 'react';
import { Text, View, FlatList, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
const ListGoals = (props) => {
    const styles = StyleSheet.create({
        listItems: {
            marginVertical: 10,
            backgroundColor: "#ccc",
            borderRadius: 10,
            borderWidth: 1,
            padding: 10,
        }
    })
    return (
        <FlatList
            keyExtractor={(item, index) => { return item.mykey }}
            data={props.listofGoals}
            renderItem={itemData => (
                <TouchableOpacity onPress={props.removeGoalfromList.bind(this, itemData.item.mykey)}>
                    <Text style={styles.listItems}>{itemData.item.value}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

export default ListGoals;
