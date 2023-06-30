import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../../App";

interface PageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SecondPage">;
}

export const SecondPage = ({ navigation }: PageProps) => (
  <View style={styles.container}>
    <Text>SECOND PAGE</Text>

    <Button title="Go to Start" onPress={() => navigation.goBack()} />
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
