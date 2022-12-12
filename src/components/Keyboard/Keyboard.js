import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Animated, { SlideInDown } from "react-native-reanimated";

import styles, { keyWidth } from "./Keyboard.styles";
const Keyboard = ({
  disabled,
  activeLetter,
  inactiveLetter,
  guessedLetters,
  addGuessedLetter = () => {},
}) => {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const [value, setValue] = useState("");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [keyDown, setKeyDown] = useState("");

  const setMargintop = () => {
    if (activeLetter.length === 0) {
      return "20%";
    } else {
      return "10%";
    }
  };

  return (
    <Animated.View
      entering={SlideInDown.duration(1300).springify().mass(0.5)}
      style={[styles.keyboard, { marginTop: setMargintop() }]}
    >
      {keys.map((keyRow, i) => (
        <View style={styles.row} key={`row-${i}`}>
          {keyRow.map((key, index) => {
            const isActive = activeLetter.includes(key);
            const isInactive = inactiveLetter.includes(key);

            return (
              <Pressable
                // onPress={() => onKeyPressed(key)}
                onPress={() => addGuessedLetter(key)}
                onTouchStart={() => setKeyDown(key)}
                onTouchEnd={() => setKeyDown("")}
                key={key}
                disabled={isInactive || isActive || disabled}
                style={[
                  [styles.key],
                  isActive
                    ? styles.active
                    : "" || isInactive
                    ? styles.inactive
                    : styles.active,
                  {
                    backgroundColor:
                      key === keyDown
                        ? "#B6BAC2"
                        : isActive
                        ? "#00bfff"
                        : "gray",
                  },
                ]}
              >
                <Text
                  disabled={isInactive || isActive || disabled}
                  style={[
                    styles.keyText,
                    {
                      color: "white",
                    },
                  ]}
                >
                  {key.toUpperCase()}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ))}
    </Animated.View>
  );
};

export default Keyboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: "100%",
//     width: "100%",
//     backgroundColor: "#fff",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//   },
// });
