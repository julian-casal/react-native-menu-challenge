import { StyleSheet, Text, View } from "react-native";

export const YourCart = () => (
  <View style={styles.container}>
    <Text>YOUR CART PAGE</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
