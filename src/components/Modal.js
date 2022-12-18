import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import Animated, { FlipInYRight, FlipInEasyX } from "react-native-reanimated";
const screenWidth = Dimensions.get("screen").width;

const Modal = ({ isWinner, startNewGame }) => {
  const [keyDown, setKeyDown] = useState(false);

  return (
    <Animated.View
      entering={FlipInEasyX.duration(1300).springify().mass(0.5)}
      style={styles.container}
    >
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

              //style for ipad screen
              ...(screenWidth === 1024 && {
                backgroundColor: keyDown ? "darkgray" : "gray",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 70,
                width: 210,
                marginTop: 20,
              }),
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

              //style for ipad screen
              ...(screenWidth === 1024 && {
                backgroundColor: keyDown ? "darkgray" : "gray",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 70,
                width: 210,
                marginTop: 20,
              }),
            }}
          >
            <Text style={styles.lose}>Play Again!</Text>
          </Pressable>
        </View>
      )}
    </Animated.View>
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
    //style for ipad screen
    ...(screenWidth === 1024 && {
      fontSize: 35,
    }),
  },
  lose: {
    color: "darkred",
    fontSize: 30,
    //style for ipad screen
    ...(screenWidth === 1024 && {
      fontSize: 30,
    }),
  },
});
