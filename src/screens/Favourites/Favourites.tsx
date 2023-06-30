import { StyleSheet, Text, View } from "react-native";

export const Favourites = () => (
  <View style={styles.container}>
    <Text>FAVOURITES PAGE</Text>
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
