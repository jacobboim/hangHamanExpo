import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const HangmanWord = ({ guessedLetters, wordToGuess, reveal }) => {
  const splitWord = wordToGuess.split("");
  const addSpaceToWord = splitWord.join(" ");

  const addUnderline = () => {
    const numUnderline = wordToGuess.length;

    //loop through the word and add an underline for each letter
    let underLine = "";
    for (let i = 0; i < numUnderline; i++) {
      underLine += "__  ";
    }
    console.log(underLine, "this is the underline");

    return underLine;
  };

  return (
    <View style={styles.wordContainer}>
      <View style={styles.actualWordCont}>
        {wordToGuess.split("").map((letter, index) => (
          <View
            key={index}
            style={{
              width: "15%",
            }}
          >
            <Text
              style={[
                styles.letterContainer,
                {
                  display:
                    guessedLetters.includes(letter) || reveal ? "flex" : "none",
                  color: !guessedLetters.includes(letter) ? "red" : "black",
                },
              ]}
            >
              <Text style={[styles.letter]}>{letter}</Text>
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.underlineContainer}>
        <View
          style={{
            width: "100%",
          }}
        >
          <Text style={[styles.fakeLetter]}>{addUnderline()}</Text>
        </View>
      </View>
    </View>
  );
};

export default HangmanWord;

const styles = StyleSheet.create({
  wordContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },

  actualWordCont: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  underlineContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    top: "10%",
    backgroundColor: "transparent",
  },

  letter: {
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  fakeLetter: {
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  fakeLetterContainer: {},

  letterContainer: {
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
