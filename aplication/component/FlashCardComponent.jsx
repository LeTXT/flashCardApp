import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Animated } from "react-native";

// array
import { wordsOffline } from "../arrayOffline/wordsOffline";

// function
import {
  handleTouchStart,
  handleTouchEnd,
  handleTouchMove,
  findCardLocation
} from "../util/changeCard";

export default function FlashCardComponent({
  cardNumber,
  flashCardRef,
  setCardNumber,
  words,
  setMoveCard,
  moveCard
}) {

  const obj = {
    left: moveCard,
  };

  return (
    <Animated.View
      style={[styles.flashCardComponent, obj]}
      ref={flashCardRef}
      onStartShouldSetResponder={(e) => handleTouchStart(e)}
      onResponderRelease={(e) => handleTouchEnd(e, setCardNumber, setMoveCard)}
      onResponderMove={(e) => handleTouchMove(e, setMoveCard)}
      
    >
      
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  flashCardComponent: {
    position: 'absolute',
    width: "90%",
    maxWidth: 250,
    height: 283,

    borderRadius: 5,
    borderColor: "#B7B7B7",
    borderStyle: "solid",
    borderWidth: 1,

    // justifyContent: "center",
    // alignItems: "center",

  },
  text: {
    fontSize: 31.43,
    position: "absolute",
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
  },
  back: {
    transform: [{ rotateY: '180deg' }],
  },
  cardContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
});

{/* <View style={styles.cardContainer}>
      <Text style={[styles.text ]}>
        {words[cardNumber]?.portuguese ?? wordsOffline[cardNumber].portuguese}
      </Text>
      </View>

      <View style={styles.cardContainer}>
      <Text style={[ styles.text ]}>
        {words[cardNumber]?.english ?? wordsOffline[cardNumber].english}
      </Text>
      </View> */}