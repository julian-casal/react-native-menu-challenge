import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../../App";

interface PageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Start">;
}

export const Start = ({ navigation }: PageProps) => (
  <View style={styles.container}>
    <Text>START PAGE</Text>

    <Button
      title="Go to Second Page"
      onPress={() => navigation.navigate("SecondPage")}
    />
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
