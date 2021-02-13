import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
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
                <Text style={styles.listItems}>{itemData.item.value}</Text>
            )}
        />
    );
};

export default ListGoals;
