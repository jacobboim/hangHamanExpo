import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState, useCallback } from "react";

import words from "../data/wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard/Keyboard.js";

import Modal from "./Modal";
import { LinearGradient } from "expo-linear-gradient";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

const MainHangHaman = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [showModal, setShowModal] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [newGame, setNewGame] = useState(false);

  //write a function to set a new game
  const startNewGame = () => {
    // setNewGame(true);
    setWordToGuess(getWord);
    setGuessedLetters([]);
    setGameOver(false);
    setShowModal(false);

    console.log("new game started");
    // setNewGame(false);
  };

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 7;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  function hasWon() {
    const isWinner = wordToGuess
      .split("")
      .every((letter) => guessedLetters.includes(letter));
    console.log(isWinner, "will show state of winner");
    return isWinner;
  }

  function hasLost() {
    const isLoser = incorrectLetters.length >= 7;

    console.log(isLoser, "will show state of loser");
    return isLoser;
  }

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner)
        return setGameOver(true);

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    // document.addEventListener("keypress", handler);

    return () => {
      //   document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    // document.addEventListener("keypress", handler);

    return () => {
      //   document.removeEventListener("keypress", handler);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (hasWon() || hasLost()) {
        setShowModal(true);
        setGameOver(true);
      }
    }, 1000);
    // hasWon();
    // hasLost();
  }, [isWinner, isLoser]);
  console.log(wordToGuess);
  console.log(showModal, " this is show modal");

  return (
    <View style={styles.container}>
      <LinearGradient
        // colors={["#607D8B", "#90A4AE", "#B0BEC5", "#CFD8DC", "#ECEFF1"]}
        colors={["#607D8B", "#546E7A", "#455A64", "#37474F", "#263238"]}
        // colors={["#607D8B", "#455A64", "#37474F", "#263238", "#212121"]}
        // colors={[
        //   "#607D8B",
        //   "#546E7A",
        //   "#455A64",
        //   "#37474F",
        //   "#263238",
        //   "#212121",
        //   "#000000",
        // ]}
        style={styles.linearGradient}
      >
        <HangmanDrawing
          numberOfGuesses={incorrectLetters.length}
          isWinner={isWinner}
          isLoser={isLoser}
        />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />

        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetter={incorrectLetters}
          guessedLetters={guessedLetters}
          addGuessedLetter={addGuessedLetter}
        />
        {showModal && (
          <Modal
            isWinner={isWinner}
            wordToGuess={wordToGuess}
            startNewGame={startNewGame}
          />
        )}
      </LinearGradient>
    </View>
  );
};

export default MainHangHaman;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "lightgray",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // backgroundColor: "blue",
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    // flex: 1,
  },
});
