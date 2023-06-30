import { StyleSheet, Text, View } from "react-native";

export const Profile = () => (
  <View style={styles.container}>
    <Text>PROFILE PAGE</Text>
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
