import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// array
import { wordsOffline } from "../arrayOffline/wordsOffline";

// function
import { handleTouchStart, handleTouchEnd } from '../util/changeCard'

export default function FlashCardComponent({ cardNumber, flashCardRef, setCardNumber, words }) {

    const [state, setState] = useState()

    return (

        <View style={styles.flashCardComponent} ref={flashCardRef} onStartShouldSetResponder={(e) => handleTouchStart(e)} onResponderRelease={(e) => handleTouchEnd(e, setCardNumber)}>
            <Text style={styles.text}>{words[cardNumber]?.english ?? wordsOffline[cardNumber].english}</Text>

            <Button title="" onPress={() => setCardNumber
            (prev => prev + 1)}></Button>
            <Text>{state}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    flashCardComponent: {
        width: '90%',
        maxWidth: 250,
        height: 250,

        borderRadius: 20,
        borderColor: '#B7B7B7',
        borderStyle: 'solid',
        borderWidth: 1,

        justifyContent: 'center',
        alignItems: 'center',

        margin: 'auto'
    },
    text: {
        fontSize: 31.43,
    }
});