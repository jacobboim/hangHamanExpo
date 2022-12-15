import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainHangHaman from "./src/components/MainHangHaman";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    // <LinearGradient
    //   // colors={["#4c669f", "#3b5998", "#192f6a"]}
    //   colors={["#4CAF50", "#8BC34A", "#CDDC39"]}
    //   style={styles.linearGradient}
    // >
    <View style={styles.container}>
      <MainHangHaman />
    </View>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
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
