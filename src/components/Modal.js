import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Modal = ({ isWinner, startNewGame }) => {
  return (
    <View style={styles.container}>
      {isWinner ? (
        <View style={styles.container}>
          <Text style={styles.win}>You Win!</Text>
          <Pressable onPress={startNewGame}>
            <Text>Play Again</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.lose}>You Lose!</Text>
        </View>
      )}
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  win: {
    color: "green",
    fontSize: 30,
  },
  lose: {
    color: "red",
    fontSize: 30,
  },
});
