import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({todo, onRemove}) => {
   
    return(
        <TouchableOpacity activeOpacity={0.4} onPress={() => console.log('pressed',  todo.id)}>
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
      
    }
})