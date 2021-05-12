import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = (props) => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>123</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
    }
})