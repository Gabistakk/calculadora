import React, { useState, useEffect } from 'react';


import { Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';



export default function Button(props) {

    const [calculateString, setCalculateString] = useState('');

    function addToCalculate(char) {

    }

    if (props.char == 'C') {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTextCCHAR} onPress={() => { addToCalculate(props.char) }}>{props.char}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => { addToCalculate(props.char) }}>{props.char}</Text>
        </TouchableOpacity>
    )

}

export function ResultText(){

}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 100,
        width: '70%',
        borderWidth: 3,
        borderColor: '#00ffff'
    },
    buttonText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FBFAF5'
    },
    buttonTextCCHAR: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#A6EBC9'
    },
    resultText: {
        color: 'white',
        fontSize: 35
      },

})