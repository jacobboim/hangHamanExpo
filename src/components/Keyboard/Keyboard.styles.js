import { StyleSheet, Dimensions } from "react-native";

const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];
const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 1.3;

export default StyleSheet.create({
  keyboard: {
    width: "100%",
    // marginTop: "30%",
    height: "20%",
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  key: {
    width: 33,
    height: 45,
    margin: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    //style for ipad screen
    ...(screenWidth === 1024 && {
      width: 75,
      height: 65,
      margin: 2,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    }),

    //style for small screen
    ...(screenWidth === 414 && {
      width: 35,
      height: 45,
    }),
  },
  active: {
    backgroundColor: "blue",
  },
  inactive: {
    backgroundColor: "lightgrey",
    opacity: 0.3,
  },

  regular: {
    backgroundColor: "gray",
    opacity: 1,
  },
  keyText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  keyIphone: {
    width: keyWidth - 4,
    height: keyHeight - 4,
    margin: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  keyTextIphone: {
    fontWeight: "bold",
  },
});
