import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

const Modal = ({ isWinner, startNewGame }) => {
  const [keyDown, setKeyDown] = useState(false);

  return (
    <View style={styles.container}>
      {isWinner ? (
        <View style={styles.container}>
          <Pressable
            onPress={startNewGame}
            onTouchStart={() => setKeyDown(true)}
            onTouchEnd={() => setKeyDown(false)}
            style={{
              backgroundColor: keyDown ? "darkgray" : "gray",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 60,
              width: 200,
              marginTop: 20,
            }}
          >
            <Text style={styles.win}>Play Again!</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.container}>
          <Pressable
            onPress={startNewGame}
            onTouchStart={() => setKeyDown(true)}
            onTouchEnd={() => setKeyDown(false)}
            style={{
              backgroundColor: keyDown ? "darkgray" : "gray",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 60,
              width: 200,
              marginTop: 20,
            }}
          >
            <Text style={styles.lose}>Play Again!</Text>
          </Pressable>
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
    color: "white",
    fontSize: 30,
  },
  lose: {
    color: "darkred",
    fontSize: 30,
  },
});
