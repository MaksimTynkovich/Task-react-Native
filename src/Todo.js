import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({todo, onRemove}) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }
    return(
        <TouchableOpacity activeOpacity={0.4} onLongPress={longPressHandler}>
        <View style={styles.todo}>
            <Text style={styles.text}>{todo.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    },
    text: {
        fontSize: '20px',
        fontWeight: 700,
    }
})