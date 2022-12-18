import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";

const screenWidth = Dimensions.get("screen").width;

const HangmanWord = ({ guessedLetters, wordToGuess, reveal }) => {
  const splitWord = wordToGuess.split("");
  const addSpaceToWord = splitWord.join(" ");

  const addUnderline = () => {
    const numUnderline = wordToGuess.length;

    //loop through the word and add an underline for each letter
    let underLine = "";
    for (let i = 0; i < numUnderline; i++) {
      if (numUnderline === 7) {
        underLine += "__ ";
      } else if (screenWidth === 414) {
        underLine += "__   ";
      } else if (screenWidth === 1024) {
        underLine += "__       ";
      } else {
        underLine += "__  ";
      }
    }
    console.log(underLine, "this is the underline");

    return underLine;
  };

  const wordToGuessLength = () => {
    const wordLength = wordToGuess.length;
    if (wordLength === 7) {
      return "13%";
    } else if (screenWidth === 1024) {
      return "10%";
    } else {
      return "16%";
    }
  };

  return (
    <View style={styles.wordContainer}>
      <View style={styles.actualWordCont}>
        {wordToGuess.split("").map((letter, index) => (
          <View
            key={index}
            style={{
              width: wordToGuessLength(),
            }}
          >
            <Text
              style={[
                styles.letterContainer,
                {
                  display:
                    guessedLetters.includes(letter) || reveal ? "flex" : "none",
                  color: !guessedLetters.includes(letter) ? "red" : "white",
                  opacity: !guessedLetters.includes(letter) ? 1 : 0.8,
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
    marginTop: "3%",
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
    //style for small screen
    ...(screenWidth === 414 && {
      fontSize: 35,
    }),
  },
  fakeLetter: {
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    ...(screenWidth === 414 && {
      fontSize: 35,
    }),
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
