import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainHangHaman from "./src/components/MainHangHaman";
export default function App() {
  return (
    <View style={styles.container}>
      <MainHangHaman />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
