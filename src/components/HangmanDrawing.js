import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  useWindowDimensions,
} from "react-native";

import React, { useEffect } from "react";
import Animated, {
  RollInLeft,
  PinwheelIn,
  FlipInYRight,
  BounceIn,
  FadeOutDown,
  SlideOutDown,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import { ICONS } from "../../assets";
import { Keyframe, Easing } from "react-native-reanimated";
const screenWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const HangmanDrawing = ({ numberOfGuesses, isWinner, isLoser }) => {
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

  const Headtwo = (
    <View style={styles.headTwo}>
      <View style={[styles.eyes, styles.leftEye]} />
      <View style={[styles.eyes, styles.rightEye]} />
      <View style={isWinner ? styles.smile : styles.frown} />
    </View>
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

  const Headtwo_LOSING = (
    <View style={styles.headTwo}>
      <View style={[styles.eyes, styles.leftEye]} />
      <View style={[styles.eyes, styles.rightEye]} />
      <View style={isWinner ? styles.smile : styles.frown} />
    </View>
  );

  const BODY_LOSING = <View style={styles.body} />;

  const RIGHT_ARM_LOSING = <View style={styles.rightArm} />;

  const LEFT_ARM_LOSING = <View style={styles.leftArm} />;

  const RIGHT_LEG_LOSING = <View style={styles.rightLeg} />;

  const LEFT_LEG_LOSING = <View style={styles.leftLeg} />;

  const hamanTash_LOSING = (
    <Image
      source={ICONS.hamanTash}
      style={{
        width: 40,
        height: 33,
        position: "absolute",
        top: 47,
        right: -125,
        ...(screenWidth === 1024 && {
          width: 70,
          height: 70,
          position: "absolute",
          top: 48,
          right: -175,
        }),
      }}
    />
  );

  const hamanTash = (
    <Animated.Image
      entering={RollInLeft.duration(1300).springify().mass(0.5)}
      source={ICONS.hamanTash}
      style={{
        width: 40,
        height: 33,
        position: "absolute",
        top: 47,
        right: -125,
        ...(screenWidth === 1024 && {
          width: 70,
          height: 70,
          position: "absolute",
          top: 48,
          right: -175,
        }),
      }}
    />
  );

  const ifWinnerShowCertainHead = () => {
    if (isWinner || isLoser === true) {
      return Headtwo;
    } else {
      return HEAD;
    }
  };

  const BODY_PARTS = [
    hamanTash,
    ifWinnerShowCertainHead(),
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG,
  ];

  const LOSING_PARTS = [
    hamanTash_LOSING,
    Headtwo_LOSING,
    BODY_LOSING,
    RIGHT_ARM_LOSING,
    LEFT_ARM_LOSING,
    RIGHT_LEG_LOSING,
    LEFT_LEG_LOSING,
  ];

  useEffect(() => {
    console.log(screenWidth, "screenWidth");
    console.log(windowHeight, "windowHeight");
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: 40,
          opacity: 0.8,

          //style for ipad screen
          ...(screenWidth === 1024 && {
            fontSize: 47,
          }),
          ...(screenWidth === 414 && {
            fontSize: 28,
            marginBottom: 28,
          }),
        }}
      >
        Hang Haman
      </Text>
      <Animated.View
      // style={[styles.gallow, { display: isLoser === true ? "none" : "flex" }]}
      >
        {/* {BODY_PARTS.slice(0, numberOfGuesses)} */}

        {isLoser === true ? (
          <Animated.View entering={FadeOutDown.duration(3500)}>
            {LOSING_PARTS}
          </Animated.View>
        ) : (
          BODY_PARTS.slice(0, numberOfGuesses)
        )}
      </Animated.View>

      <View style={styles.stickFigure}>
        <View style={styles.downLine} />

        <View style={styles.topLine} />
        <View style={styles.diagnolLine} />
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
    marginTop: "7%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "190%",
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
    right: -53,

    position: "absolute",

    //style for ipad
    ...(screenWidth === 1024 && {
      height: 50,
      width: 15,
      backgroundColor: "black",
      top: 0,
      right: 4,

      position: "absolute",
    }),
    //style for small screen
    ...(screenWidth === 414 && {
      height: 50,
      width: 10,
      backgroundColor: "black",
      top: 0,
      right: -48,

      position: "absolute",
    }),
  },

  topLine: {
    height: 10,
    width: 150,
    marginLeft: "13%",

    backgroundColor: "black",
    //style for ipad
    ...(screenWidth === 1024 && {
      height: 15,
      width: 250,
      marginLeft: "13%",

      backgroundColor: "black",
    }),
  },

  diagnolLine: {
    height: 10,
    width: 90,
    marginLeft: "7%",
    marginTop: 35,
    position: "absolute",

    backgroundColor: "black",
    transform: [{ rotate: "-45deg" }],

    //style for ipad
    ...(screenWidth === 1024 && {
      height: 15,
      width: 85,
      marginLeft: "10%",
      marginTop: 35,
      position: "absolute",

      backgroundColor: "black",
      transform: [{ rotate: "-45deg" }],
    }),
  },
  middleLine: {
    height: 285,
    width: 10,
    backgroundColor: "black",
    marginLeft: "13%",
    //style for ipad
    ...(screenWidth === 1024 && {
      height: 400,
      width: 15,
      backgroundColor: "black",
      marginLeft: "13%",
    }),
    //style for small screen
    ...(screenWidth === 414 && {
      height: 250,
    }),
  },

  bottomLine: {
    height: 10,
    width: 300,
    marginLeft: "-80%",
    backgroundColor: "black",
    //style for ipad
    ...(screenWidth === 1024 && {
      marginLeft: "-50%",
      height: 15,
      width: 540,
    }),
    ...(screenWidth === 414 && {
      top: 2,
    }),
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
    ...(screenWidth === 1024 && {
      height: 70,
      width: 70,
      borderRadius: 50,
      backgroundColor: "#fff",
      borderWidth: 8,
      borderColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",

      top: 110,
      right: -175,
    }),
  },
  body: {
    height: 100,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 125,
    left: 100,
    //style for ipad
    ...(screenWidth === 1024 && {
      height: 130,
      width: 10,
      backgroundColor: "#000",
      position: "absolute",
      top: 173,
      left: 135,
    }),
    //style for small screen
    ...(screenWidth === 414 && {
      height: 80,
    }),
  },
  leftArm: {
    height: 75,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 115,
    left: 75,
    transform: [{ rotate: "-45deg" }],
    //style for ipad
    ...(screenWidth === 1024 && {
      height: 75,
      width: 10,
      backgroundColor: "#000",
      position: "absolute",
      top: 170,
      left: 105,
    }),
    ...(screenWidth === 414 && {
      top: 105,
    }),
  },
  rightArm: {
    height: 75,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 115,
    left: 125,
    transform: [{ rotate: "45deg" }],
    //style for ipad
    ...(screenWidth === 1024 && {
      height: 75,
      width: 10,
      backgroundColor: "#000",
      position: "absolute",
      top: 170,
      left: 165,
    }),
    ...(screenWidth === 414 && {
      top: 105,
    }),
  },
  leftLeg: {
    height: 75,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 212,
    left: 75,
    transform: [{ rotate: "45deg" }],

    //style for ipad
    ...(screenWidth === 1024 && {
      height: 75,
      width: 10,
      backgroundColor: "#000",
      position: "absolute",
      top: 285,
      left: 110,
    }),
    ...(screenWidth === 414 && {
      top: 190,
    }),
  },
  rightLeg: {
    height: 75,
    width: 10,
    backgroundColor: "#000",
    position: "absolute",
    top: 212,
    left: 125,
    transform: [{ rotate: "-45deg" }],
    //style for ipad
    ...(screenWidth === 1024 && {
      height: 75,
      width: 10,
      backgroundColor: "#000",
      position: "absolute",
      top: 285,
      left: 160,
    }),
    ...(screenWidth === 414 && {
      top: 190,
    }),
  },
  stickFigure: {
    width: "30%",
    height: "70%",
  },

  headTwo: {
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
    ...(screenWidth === 1024 && {
      height: 70,
      width: 70,
      borderRadius: 50,
      backgroundColor: "#fff",
      borderWidth: 8,
      borderColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",

      top: 110,
      right: -175,
    }),
  },
  eyes: {
    width: 8,
    height: 8,
    backgroundColor: "#000",
    borderRadius: 10,
    position: "absolute",
    ...(screenWidth === 1024 && {
      width: 10,
      height: 10,
      backgroundColor: "#000",
      borderRadius: 10,
      position: "absolute",
    }),
  },
  leftEye: {
    left: 20,
    top: 10,
    ...(screenWidth === 1024 && {
      left: 10,
      top: 11,
    }),
  },
  rightEye: {
    right: 20,
    top: 10,
    ...(screenWidth === 1024 && {
      right: 10,
      top: 11,
    }),
  },
  smile: {
    width: 15,
    height: 9,
    marginTop: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: "black",
    ...(screenWidth === 1024 && {
      width: 20,
      height: 11,
      marginTop: 18,
      borderBottomLeftRadius: 35,
      borderBottomRightRadius: 35,
      backgroundColor: "black",
    }),
  },
  frown: {
    width: 15,
    height: 9,
    marginTop: 16,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "black",
    ...(screenWidth === 1024 && {
      width: 20,
      height: 11,
      marginTop: 18,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      backgroundColor: "black",
    }),
  },
});
