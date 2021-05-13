import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()){
        onSubmit(value)
        setValue('')
        } else {
        Alert.alert('Ошибка!')
    }}

    return (
        <View style={styles.block}>
            <TextInput
             style={styles.input} 
             placeholder="Название задачи"
             onChangeText={setValue}
             value={value}
             autoCorrect={false}
             />
            <Button style={styles.button} title="Добавить" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 15
    },
    input: {
        width: '60%',
        height: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,        
        textAlign: 'center',
    },
})