import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// component
import FlashCardComponent from "../component/FlashCardComponent";

// function
import {generateObjectArray} from '../util/words'

export default function FlashCardContainer() {
    const [ cardNumber, setCardNumber ] = useState(0)
    const [ words, setWords ] = useState([])

    const flashCardRef = useRef() 

    useEffect(() => {

        generateObjectArray(setWords)

    }, [])

    return (
        <View style={styles.container}>
            <FlashCardComponent cardNumber={cardNumber} flashCardRef={flashCardRef} setCardNumber={setCardNumber} words={words} />

            <View>
                <Text>
                {cardNumber}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });