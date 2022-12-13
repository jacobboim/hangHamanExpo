import { View, Text, StyleSheet, Dimensions } from "react-native";

import React from "react";
import Animated, {
  RollInLeft,
  PinwheelIn,
  FlipInYRight,
  BounceIn,
} from "react-native-reanimated";

import { Keyframe, Easing } from "react-native-reanimated";
const screenWidth = Dimensions.get("window").width;

const HangmanDrawing = ({ numberOfGuesses }) => {
  const rightArm = new Keyframe({
    0: {
      transform: [{ rotate: "45deg" }],
    },
    30: {
      transform: [{ rotate: "-90deg" }],
    },
    100: {
      transform: [{ rotate: "45deg" }],
      easing: Easing.quad,
    },
  }).duration(2000);

  const leftArm = new Keyframe({
    0: {
      transform: [{ rotate: "45deg" }],
    },
    30: {
      transform: [{ rotate: "-90deg" }],
    },
    100: {
      transform: [{ rotate: "-45deg" }],
      easing: Easing.quad,
    },
  }).duration(2000);

  const rightLeg = new Keyframe({
    0: {
      transform: [{ rotate: "0deg" }],
    },
    100: {
      transform: [{ rotate: "145deg" }],
    },
  });

  const leftLeg = new Keyframe({
    0: {
      transform: [{ rotate: "0deg" }],
    },
    100: {
      transform: [{ rotate: "-145deg" }],
    },
  });
  const HAT = (
    <Animated.View
      entering={RollInLeft.duration(1300).springify().mass(0.5)}
      style={[styles.triangle, styles.arrowUp]}
    />
  );

  const HEAD = (
    <Animated.View
      entering={RollInLeft.duration(1300).springify().mass(0.5)}
      style={styles.head}
    />
  );

  const BODY = (
    <Animated.View
      entering={RollInLeft.duration(1300).springify().mass(0.5)}
      style={styles.body}
    />
  );

  const RIGHT_ARM = (
    <Animated.View entering={rightArm.duration(1300)} style={styles.rightArm} />
  );

  const LEFT_ARM = (
    <Animated.View entering={leftArm.duration(1300)} style={styles.leftArm} />
  );

  const RIGHT_LEG = (
    <Animated.View entering={rightLeg.duration(1000)} style={styles.rightLeg} />
  );

  const LEFT_LEG = (
    <Animated.View entering={leftLeg.duration(1000)} style={styles.leftLeg} />
  );

  const BODY_PARTS = [
    HAT,
    HEAD,
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG,
  ];

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Hang Haman
      </Text>
      <View style={styles.gallow}>{BODY_PARTS.slice(0, numberOfGuesses)}</View>

      <View style={styles.stickFigure}>
        <View style={styles.downLine} />

        <View style={styles.topLine} />
        <View style={styles.middleLine} />
        <View style={styles.bottomLine} />
      </View>
    </View>
  );
};

export default HangmanDrawing;

//style sheet

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    height: "50%",
    width: "100%",
    marginTop: "15%",
    alignItems: "center",
    justifyContent: "center",
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
  },

  downLine: {
    height: 50,
    width: 10,
    backgroundColor: "black",
    top: 0,
    right: -50,

    position: "absolute",
  },

  topLine: {
    height: 10,
    width: 150,
    marginLeft: "13%",

    backgroundColor: "black",
  },
  middleLine: {
    height: 300,
    width: 10,
    backgroundColor: "black",
    marginLeft: "13%",
    //style for small screen
    ...(screenWidth <= 2209 && {
      height: 280,
    }),
  },

  bottomLine: {
    height: 10,
    width: 300,
    marginLeft: "-80%",
    backgroundColor: "black",
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    position: "absolute",

    top: 50,
    right: -137,
  },
  arrowUp: {
    borderTopWidth: 0,
    borderRightWidth: 33,
    borderBottomWidth: 33,
    borderLeftWidth: 33,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "black",
    borderLeftColor: "transparent",
  },

  head: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderWidth: 8,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",

    top: 80,
    right: -130,
  },
  body: {
    height: 100,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 125,
    left: 100,
  },
  leftArm: {
    height: 75,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 115,
    left: 75,
    transform: [{ rotate: "-45deg" }],
  },
  rightArm: {
    height: 75,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 115,
    left: 125,
    transform: [{ rotate: "45deg" }],
  },
  leftLeg: {
    height: 75,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 212,
    left: 75,
    transform: [{ rotate: "45deg" }],
  },
  rightLeg: {
    height: 75,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 212,
    left: 125,
    transform: [{ rotate: "-45deg" }],
  },
  stickFigure: {
    width: "30%",
    height: "70%",
  },
});
