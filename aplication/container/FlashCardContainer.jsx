import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// component
import FlashCardComponent from "../component/FlashCardComponent";

// function
import { generateObjectArray } from "../util/words";
import { findCardWidth } from "../util/changeCard";

export default function FlashCardContainer() {
  const [cardNumber, setCardNumber] = useState(0);
  const [words, setWords] = useState([]);
  const [moveCard, setMoveCard] = useState((392.7272644042969 - 250) / 2);

  const flashCardRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    generateObjectArray(setWords);
  }, []);

  return (
    <View style={styles.container} ref={containerRef} onLayout={(e) => findCardWidth(e, setMoveCard)}>

      <FlashCardComponent
        cardNumber={cardNumber}
        flashCardRef={flashCardRef}
        setCardNumber={setCardNumber}
        words={words}
        containerRef={containerRef}
        setMoveCard={setMoveCard}
        moveCard={moveCard}
        
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
